import {EventEmitter, Injectable} from '@angular/core';
import {TaskModel} from '../models/task.model';

@Injectable()
export class DataProviderService {
    isLogin = new EventEmitter<boolean>();
    isAmin = false;

    taskData: TaskModel[] = [
        new TaskModel('Sergey', 'polous@ro.ru', 'SimpleText is the native text editor ' +
            'for the Apple classic Mac OS. SimpleText allows editing including text formatting ' +
            '(underline, italic, bold, etc.), fonts, and sizes. It was developed to integrate the featu' +
            'res included in the different versions of TeachText that were created by various software' +
            ' development groups within Apple', false, 'https://i.pinimg.com/736x/fd/75/c3/fd75c36728a2b3ed6156739255aa345d.jpg'),
        new TaskModel('Sergey', 'polous@ro.ru', 'SimpleText is the native text editor ' +
            'for the Apple classic Mac OS. SimpleText allows editing including text formatting ' +
            '(underline, italic, bold, etc.), fonts, and sizes. It was developed to integrate the featu' +
            'res included in the different versions of TeachText that were created by various software' +
            ' development groups within Apple', true, 'https://i.pinimg.com/736x/fd/75/c3/fd75c36728a2b3ed6156739255aa345d.jpg'),
        new TaskModel('Sergey', 'polous@ro.ru', 'SimpleText is the native text editor ' +
            'for the Apple classic Mac OS. SimpleText allows editing including text formatting ' +
            '(underline, italic, bold, etc.), fonts, and sizes. It was developed to integrate the featu' +
            'res included in the different versions of TeachText that were created by various software' +
            ' development groups within Apple', false, 'https://i.pinimg.com/736x/fd/75/c3/fd75c36728a2b3ed6156739255aa345d.jpg'),
    ];

    constructor() {
    }

}
