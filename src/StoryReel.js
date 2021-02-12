import React from 'react'
import Story from './Story'
import './StoryReel.css'
const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story  
             image="https://expertphotography.com/wp-content/uploads/2019/05/beautiful-photography-waterfall.jpg"
             profileScr="https://i.dlpng.com/static/png/5168790-smiling-man-png-photo-png-arts-png-smiling-man-500_571_preview.png"
             title="Jahongir Muminov"
            />
               <Story  
             image="https://acegif.com/wp-content/gif/mercs15ddn-31-gap.jpg"
             profileScr="https://www.pngkit.com/png/full/340-3400395_guy-left-call-center-man-png.png"
             title="Jim Kerry"
            />
               <Story  
             image="https://cdn2.vectorstock.com/i/1000x1000/53/71/beautiful-merry-christmas-greeting-card-with-gold-vector-14305371.jpg"
             profileScr="https://i1.wp.com/idealog.co.nz/wp-content/uploads/media/new-images/ivankatrump.jpg?w=1300&ssl=1"
             title="Lili  Pak"
            />
               <Story  
             image="https://i.pinimg.com/originals/5e/b6/6c/5eb66c4e498377df2264caf93d923b77.jpg"
             profileScr="https://www.irishtimes.com/polopoly_fs/1.1772594.1398343909!/image/image.jpg_gen/derivatives/ratio_4x3_w1200/image.jpg"
             title="Sveta  Lim"
            />
        </div>
    )
}

export default StoryReel
