import { Component, OnInit } from '@angular/core';
import { ReviewItem} from './review.model'
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 reviewItems: ReviewItem[];


  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewItems = this.reviewService.getAllRevisions()

  }

  addRevision(itemforReview: ReviewItem){
    this.reviewItems.push(itemforReview);

  }

}
