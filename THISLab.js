var slideShow = {
    photoList: ['pic1','pic2','pic3','pic4','pic5','pic6'],
    currentPhotoIndex: 0,

    nextPhoto: function(){
        
        if (this.currentPhotoIndex < this.photoList.length-1){
            console.log(this.photoList[this.currentPhotoIndex+1]);
            return this.currentPhotoIndex++;
            
        } else 
            // this.currentPhotoIndex = -1;
            {console.log("End of slideshow");
            slideShow.pause();
            }
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex > 0){
            console.log(this.photoList[this.currentPhotoIndex-1]);
            return this.currentPhotoIndex--;
            
        } else console.log("End of slideshow");
    },
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    },

    playInterval: null,

    play: function() {
        var that = this;
        this.playInterval = setInterval(function(){that.nextPhoto()}, 2000)
        console.log(this.getCurrentPhoto());
    },

    pause: function() {
        clearInterval(this.playInterval);
    }
};



console.log(slideShow.photoList.length);
slideShow.play();

// console.log(slideShow.getCurrentPhoto())
// console.log(slideShow.currentPhotoIndex)