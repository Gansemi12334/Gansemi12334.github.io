let leftArrow = document.getElementById('left-arrow');
let secondLeftArrow = document.getElementById('left-arrow2')
let thirdLeftArrow = document.getElementById('left-arrow3')
let rightArrow = document.getElementById('right-arrow');
let secondRightArrow = document.getElementById('right-arrow2');
let thirdRightArrow = document.getElementById('right-arrow3');
let name = document.getElementById('name');
let info = document.getElementById('info');
let blackSlider = document.getElementById('black-slider');
let secondBlackSlider = document.getElementById('black-slider2');
let thirdBlackSlider = document.getElementById('black-slider3');
let secondFeedBackInfo = document.getElementById('feedBack-info2');
let thirdFeedBackInfo = document.getElementById('feedBack-info3');




rightArrow.onclick = function() {
    name.style.display = 'none';
    info.style.display = 'none';
    blackSlider.style.display = 'none';
    secondBlackSlider.style.display = 'flex';
    rightArrow.style.display = 'none'
    secondRightArrow.style.display = 'flex';
    secondFeedBackInfo.style.display = 'flex';
    thirdFeedBackInfo.style.display = 'none';
};
leftArrow.onclick = function() {
    photo.style.display = 'flex';
    name.style.display = 'flex';
    info.style.display = 'flex';
    blackSlider.style.display = 'flex';
    rightArrow.style.display = 'flex';
    secondRightArrow.style.display = 'none';
    secondBlackSlider.style.display = 'none';
    secondFeedBackInfo.style.display = 'none';

};

secondRightArrow.onclick = function() {
    thirdBlackSlider.style.display = 'flex';
    secondBlackSlider.style.display = 'none';
    leftArrow.style.display = 'none';
    secondLeftArrow.style.display = 'flex';
    secondRightArrow.style.display = 'flex';
    secondFeedBackInfo.style.display = 'none';
    thirdFeedBackInfo.style.display = 'flex';
    thirdLeftArrow.style.display = 'flex';
}

thirdLeftArrow.onclick = function() {
    thirdLeftArrow.style.display = 'none';
    secondBlackSlider.style.display = 'flex';
    rightArrow.style.display = 'none'
    secondRightArrow.style.display = 'flex';
    secondFeedBackInfo.style.display = 'flex';
    thirdBlackSlider.style.display = 'none';
    secondBlackSlider.style.display = 'flex';
    thirdFeedBackInfo.style.display = 'none';
    rightArrow.style.display = 'flex'
} 

secondLeftArrow.onclick = function() {
    secondFeedBackInfo.style.display = 'none';
    blackSlider.style.display = 'flex';
    secondBlackSlider.style.display = 'none';
    photo.style.display = 'flex';
    name.style.display = 'flex';
    info.style.display = 'flex';
    secondRightArrow.style.display = 'none'
    thirdRightArrow.style.display = 'flex';
}

thirdRightArrow.onclick = function() {
    photo.style.display = 'none';
    name.style.display = 'none';
    info.style.display = 'none';
    blackSlider.style.display = 'none';
    secondBlackSlider.style.display = 'flex';
    rightArrow.style.display = 'none'
    secondRightArrow.style.display = 'flex';
    secondFeedBackInfo.style.display = 'flex';
    thirdFeedBackInfo.style.display = 'none';
    thirdRightArrow.style.display = 'none'
}




