import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "6475e61d03a1ea47532c",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploadImage;