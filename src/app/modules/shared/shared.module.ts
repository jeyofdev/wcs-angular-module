import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './modules/shared/components/user-card/user-card.component';

@NgModule({
    declarations: [UserCardComponent],
    imports: [CommonModule],
    exports: [UserCardComponent],
})
export class SharedModule {}
