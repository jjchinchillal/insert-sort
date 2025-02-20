import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'insertion-sort',
  styleUrl: 'insertion-sort.scss',
  shadow: true,
})
export class InsertionSort {
  @State() numbers: number[] = [];
  @State() sortedNumbers: number[] = [];
  @State() steps: string[] = [];
  @State() sorting: boolean = false;
  @State() inputValue: string = '';
  @State() selectedAlgorithm: 'iterative' | 'recursive' = 'iterative';

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  addNumber() {
    if (this.inputValue.trim() !== '') {
      const num = parseInt(this.inputValue, 10);
      if (!isNaN(num)) {
        this.numbers = [...this.numbers, num];
        this.inputValue = '';
      }
    }
  }

  resetNumbers() {
    this.numbers = [];
    this.sortedNumbers = [];
    this.steps = [];
    this.sorting = false;
  }

  insertionSortIterative(arr: number[]) {
    let sorted = [...arr];
    let steps = [`Inicio: ${sorted.join(', ')}`];

    for (let i = 1; i < sorted.length; i++) {
      let key = sorted[i];
      let j = i - 1;
      while (j >= 0 && sorted[j] > key) {
        sorted[j + 1] = sorted[j];
        j--;
      }
      sorted[j + 1] = key;
      steps.push(`Paso ${i}: Insertando ${key}, lista: ${sorted.join(', ')}`);
    }

    this.steps = steps;
    return sorted;
  }

  insertionSortRecursive(arr: number[], n: number, steps: string[] = []): number[] {
    if (n <= 1) return arr;
    
    this.insertionSortRecursive(arr, n - 1, steps);
    let key = arr[n - 1];
    let j = n - 2;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
    steps.push(`Paso ${n}: Insertando ${key}, lista: ${arr.join(', ')}`);
    this.steps = steps;
    
    return arr;
  }

  startSorting() {
    this.sorting = true;
    if (this.selectedAlgorithm === 'iterative') {
      this.sortedNumbers = this.insertionSortIterative([...this.numbers]);
    } else {
      this.sortedNumbers = this.insertionSortRecursive([...this.numbers], this.numbers.length);
    }
  }

  handleAlgorithmChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedAlgorithm = target.value as 'iterative' | 'recursive';
    this.resetNumbers();
  }

  render() {
    return (
      <div class="container">
        <h1>Algoritmo Insert-Sort</h1>

        <label>Seleccione el tipo de ordenamiento:</label>
        <select onInput={(e) => this.handleAlgorithmChange(e)}>
          <option value="iterative">Iterativo</option>
          <option value="recursive">Recursivo</option>
        </select>

        <div class="input-section">
          <input type="text" value={this.inputValue} onInput={(e) => this.handleInputChange(e)} placeholder="Ingrese un número" />
          <button onClick={() => this.addNumber()}>Agregar Número</button>
          <button onClick={() => this.resetNumbers()}>Reiniciar</button>
        </div>

        <p><strong>Lista actual:</strong> {this.numbers.join(', ')}</p>

        <button onClick={() => this.startSorting()} disabled={this.numbers.length === 0}>Ordenar ({this.selectedAlgorithm === 'iterative' ? 'Iterativo' : 'Recursivo'})</button>

        {this.sorting && (
          <div class="results">
            <p><strong>Lista ordenada:</strong> {this.sortedNumbers.join(', ')}</p>
            <h2>Pasos del algoritmo:</h2>
            <ul>
              {this.steps.map(step => (
                <li>{step}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
