
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
const cloud_name = import.meta.env.VITE_CLOUD_NAME
const uploadImageToCloudinary = async (file) => {
    
    const uploadData=  new FormData();
    uploadData.append('file',file)
    uploadData.append('upload_preset',upload_preset)
    uploadData.append('cloud_name',cloud_name)

    const resp=  await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
        method:'post',
        body:uploadData
    });
    if (!resp.ok) {
        throw new Error(`Error uploading image: ${resp.status} - ${resp.statusText}`);
    }

    const  data= await resp.json()
    // console.log('Cloudinary Response:', data);
    return data; 
}


export default uploadImageToCloudinary