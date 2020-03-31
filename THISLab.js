var slideShow = {
    photoList: ['pic1','pic2','pic3','pic4','pic5','pic6'],
    currentPhotoIndex: 2,
    nextPhoto: function(){
        
        if (this.currentPhotoIndex < this.photoList.length-1){
            console.log(this.photoList[this.currentPhotoIndex+1]);
            return this.currentPhotoIndex++;
            
        } else console.log("End of slideshow");
        // move currentPhotoIndex to the next index "IF" there is one
        // logs the current photo name
        // otherwise log "End of slideshow"
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex > 0){
            console.log(this.photoList[this.currentPhotoIndex-1]);
            return this.currentPhotoIndex--;
            
        } else console.log("End of slideshow");
        // same as nextphoto but backwards.
    },
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
        // returns the current photo from the list
    },
}



console.log(slideShow.getCurrentPhoto())
console.log(slideShow.currentPhotoIndex)






