import { Component, input, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  name = input.required<string>({ alias: 'tete' });
  salary = input.required<unknown,string>({ transform: numberAttribute });
  message= output<string>()

  sendMessage() {
    this.message.emit('He enviado el mensaje')
    console.log(typeof(this.salary()))
  }
}
