import { Component, Input, Output} from '@angular/core';
/* entities */
import { Question } from '../../entities/question';
import { Answer } from '../../entities/answer';
/* Service */
import { AnswerService } from '../../services/answer.service';

@Component({
    moduleId: module.id,
    selector: `exam-form`,
    templateUrl:'exam.component.html'
})
export class ExamFormComponent  { 
    @Input() question:Question;

    answers:Answer[]=[];

    constructor(
        public answerService: AnswerService
    ){ }
    
    getAnswers():void{
        this.answerService.getAnswers(this.question.QuestionID)
            .then(ans => this.answers = ans)
            .catch(()=>{
                console.log('error on getting answers - getAnswers()');
            });
    }

}
