export class Menu {
  public static menu: Array<any> = [
    {
      doctor: [{ label: "Dashboard", key: "docdash" }],
      nurse: [{ label: "Dashboard", key: "nursedash" }],
      admin: [{ label: "Dashboard", key: "admindash" }],
      employee: [{ label: "Dashboard", key: "employeedash" }],
      student: [{ label: "Dashboard", key: "studentdash" }]
    }
  ];
  public static getallmenues() {
    return this.menu;
  }
}
