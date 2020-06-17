import { ReviewItem } from './review.model';

export class ReviewService{
   private reviewItems: ReviewItem[]=[
        new ReviewItem('Venum boxing shorts', 'Venum, size - medium', 'https://www.venum.com/media/catalog/product/cache/3d6373dfdbd8bf7042581a31874a0831/3/f/3f9387d44b3e12a825cac75f4ea5a341a2f2e6b1_BOXING_SHORT_ELITE_BLUE_RED_WHITE_1500_04.jpg', 150, 100),
        new ReviewItem('Another Venum boxing shorts', 'Venum, size - XXXL', 'https://www.venum.com/media/catalog/product/cache/3d6373dfdbd8bf7042581a31874a0831/3/f/3f9387d44b3e12a825cac75f4ea5a341a2f2e6b1_BOXING_SHORT_ELITE_BLUE_RED_WHITE_1500_04.jpg', 300, 100)
       ]

       getAllRevisions(){
          return this.reviewItems;
       }
       addReviewItems(reviewItem: ReviewItem){
           this.reviewItems.push(reviewItem)
       }
}