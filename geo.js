const geeoloction = document.getElementsByTagName('button')[0]

geeoloction.addEventListener('click', evt => {

    if ('geolocation' in navigator) {
        
        navigator.geolocation.getCurrentPosition(postion => {
            let coord_latitude = postion.coords.latitude
            let coords_longitude = postion.coords.longitude
        //    let  key=AIzaSyAknabXTolNu0RocGnYVvgUdeaKINmYgJg
         
            let maps = `https://maps.googleapis.com/maps/api/staticmap?center=${coord_latitude},${coords_longitude}&zoom=11&size=400x400&key=AIzaSyAknabXTolNu0RocGnYVvgUdeaKINmYgJg`
            let getimge = document.getElementsByTagName('img')

            getimge.src = maps;
            console.log(coord_latitude, '<br/>', coords_longitude)



        })
    } else {
        console.log('not suported')
    }


})