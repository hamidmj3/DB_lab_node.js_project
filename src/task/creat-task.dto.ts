export class CreateTaskDto {
    readonly name: string;
    readonly userID: number;
    readonly catagoryID: number;
    readonly tagIDs: number[];
    readonly items: string[];
  }

  export class UpdateTaskDto {
    readonly ID: number;
    readonly catagoryID: number;
    readonly name: string;
    readonly tags: string[];
    readonly items: string[];
  }

  export class UpdateItemDto {
    readonly ItemID: number;
    readonly taskID: number;
    readonly name: string;
  }
  export class DeleteItemDto {
    readonly ItemID: number;
    readonly taskID: number;
  }