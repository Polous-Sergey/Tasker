export class TaskModel {
    constructor(public userName: string,
                public email: string,
                public text: string,
                public complited: boolean,
                public imgSrc: string) {
    }
}
