import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zig-Zag';
  form: any;
  result: any;
  openResult: boolean = false;
  res_str: any;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.form = {
      str: null,
      no: null
    }
  }

  onCancel() {
    this.openResult = false;
    this.form.str = null;
    this.form.no = null;
  }

  onSubmit() {
    if (this.form.str && this.form.no) {
      let str = this.form.str;
      let numRows = Number(this.form.no)
      this.printZigzag(str, numRows);
    } else {
      this.openResult = false;
    }
  }

  printZigzag = (str, numRows) => {
    if (numRows === 1) {
      return str;
    }

    // Create a 2d array 
    const matrix = new Array(numRows).fill(0).map(() => new Array(str.length).fill(null));
    let c = this.toCharArray(str);
    let row = 0;
    let down = true;

    for (let i = 0; i < str.length; i++) {
      matrix[row][i] = c[i];

      if (row == numRows - 1)
        down = false;
      else if (row == 0)
        down = true;

      if (down)
        row++;
      else
        row--;
    }

    // Print the Zig-Zag String 
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < str.length; j++) {
        matrix[i][j] + " ";
      }

      this.result = matrix;
      let data = this.result.flat();
      let elements = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i])
          elements.push(data[i]);
      }
      this.res_str = elements.join('');
    }

    this.openResult = true;
  }

  toCharArray(str) {
    let charArray = [];
    for (var i = 0; i < str.length; i++) {
      charArray.push(str[i]);
    }

    return charArray;
  }

  onNumberKeyDown(e): void {
    if (!this.isNumericInput(e)) {
      e.preventDefault();
    }
  }

  isNumericInput(input): boolean {
    if (input.shiftKey)
      return false;

    if (input.keyCode === 8 || (input.keyCode >= 48 && input.keyCode <= 57) ||
      (input.keyCode >= 96 && input.keyCode <= 105)) {
      return true;
    } else {
      return false;
    }
  }
}


