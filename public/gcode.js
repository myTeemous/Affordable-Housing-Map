geocode();

function geocode(){
    let location = "3230 Boynton Dr Houston TX";

    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params:{
            address: location,
            key: "AIzaSyDB5CnAV4r1wiZFlvErG39Rtx8EWQYLLfk"
        }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}