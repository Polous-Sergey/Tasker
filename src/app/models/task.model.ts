export class TaskModel {
    constructor(public username: string,
                public email: string,
                public id: number,
                public text: string,
                public status: number,
                public image_path: string) {
    }
}
