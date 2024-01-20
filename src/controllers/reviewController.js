import Review from '../models/review.models';

export const getAllReviews= async(req, res)=>{


    try {
        const reviews= await Review.find({})
        res.status(200).json({
            message:'successful',
            success:true,
            data:reviews
        })
    } catch (error) {
        res.status(404).json({
            message:'no review found',
            success:false,
            
        })
    }
}

// create review
export const  createReview = async (req,res)=>{
   
    if (!req.body.user) req.body.user = req.id;

    const newReview = new Review(req.body);
    try {
         
    } catch (error) {
        
    }
}