import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    let { data, error } = await supabase.from("cabins").select("*");
    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    return data;
}

export async function deleteCabin(id) {
    const { error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be deleted");
    }
}

export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
    // 1. Create Cabin
    const { data, error } = await supabase
        .from("cabins")
        .insert([{ ...newCabin, image: imagePath }])
        .select();

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be created");
    }

    // 2. Upload Image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. Delete the Cabin if there was any error in Uploading Images
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error("Cabin image could not be uploaded and Cabin is not created.");
    }

    return data;
}
