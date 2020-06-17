import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ReviewItem } from '../review.model';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('descriptionInput') descriptionInputRef: ElementRef;
@ViewChild('imagePathInput') imageInputRef: ElementRef;
@ViewChild('priceInput') priceInputRef: ElementRef;
@ViewChild('costInput') costInputRef: ElementRef;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const revviewName = this.nameInputRef.nativeElement.value;
    const revviewDesc = this.descriptionInputRef.nativeElement.value;
    const revviewImagePath = this.imageInputRef.nativeElement.value;
    const revviewPrice = this.priceInputRef.nativeElement.value;
    const revviewCost = this.costInputRef.nativeElement.value;
    const newReviewItem = new ReviewItem(revviewName,revviewDesc, revviewImagePath, revviewPrice, revviewCost)
    this.reviewService.addReviewItems(newReviewItem)

  }
}
