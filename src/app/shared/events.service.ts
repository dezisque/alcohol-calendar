import {Injectable} from '@angular/core';

export interface Drink {
  name: string;
  quantity: number;
  price: number;
}

export interface EvList {
  name: string;
  drinks: Drink[];
}

export interface Event {
  date: Date;
  eventList: EvList [];
}

@Injectable({providedIn: 'root'})

export class EventsService {
  public events: Event[] = [
    {
      date: new Date(2020, 7, 10, 0, 0, 0),
      eventList: [
        {
          name: 'День рождения Лехи',
          drinks: [
            {name: 'Водка', quantity: 500, price: 700},
            {name: 'Пиво', quantity: 1500, price: 400}
          ]
        },
        {
          name: 'Бухать!',
          drinks: [
            {name: 'Водка', quantity: 500, price: 700},
            {name: 'Пиво', quantity: 1500, price: 400}
          ]
        },
      ]
    },
    {
      date: new Date(2020, 7, 11, 0, 0, 0),
      eventList: [
        {
          name: 'Продолжаем бухич!',
          drinks: [
            {name: 'Водка', quantity: 500, price: 700},
            {name: 'Пиво', quantity: 1500, price: 400}
          ]
        }
      ]
    }
  ];
  public setData(data: Event[]): void {
    this.events = data;
  }
  public getData(): Event[] {
    return this.events;
  }
}
