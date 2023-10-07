namespace Subjects {
  export class React implements Teacher {
    // Add the experienceTeachingReact attribute
    public experienceTeachingReact?: number;

    public getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher(): string {
      if (this.experienceTeachingReact !== undefined) {
        return `Available Teacher: ${this.firstName}`;
      }
      return "No available teacher";
    }
  }
}
