//...
/* export async function uploadMichiPhoto(){
    const form = document.getElementById("uploandingFrom");
    const formData = new FormData(form);
    const res =  await fetch(`${API_BASE}/images/upload`,{
        method:"POST",
        headers:{
            "X-API-KEY":API_KEY
        },
        body:formData,
    })
    const data = await res.json();
    saveFavoriteMichi(data.id)
} */