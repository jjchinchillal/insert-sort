import { Component, h, State } from '@stencil/core';
import { insertionSort } from '../insertion-sort/insertions-sort';

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
  @State() sortOrder: 'asc' | 'desc' = 'asc';

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

  startSorting() {
    this.sorting = true;
    const { sortedArray, steps } = insertionSort([...this.numbers], this.sortOrder);
    this.sortedNumbers = sortedArray;
    this.steps = steps;
  }

  handleSortOrderChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortOrder = target.value as 'asc' | 'desc';
  
    if (this.numbers.length > 0) {
      const { sortedArray, steps } = insertionSort([...this.numbers], this.sortOrder);
      this.sortedNumbers = sortedArray;
      this.steps = steps;
      this.sorting = true;
    }
  }
  

  render() {
    return (
      <div class="outer-container">
        <div class="container">
          <h1>Algoritmo de ordenamiento por inserción</h1>
          <div class="algorithm-selector">
            <label>Seleccione el tipo de ordenamiento:</label>
            <select onInput={(e) => this.handleSortOrderChange(e)}>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>
          <div class="input-section">
            <input type="number" value={this.inputValue} onInput={(e) => this.handleInputChange(e)} placeholder="Ingrese un número" />
            <button onClick={() => this.addNumber()}>Agregar Número</button>
            <button class="reset-button" onClick={() => this.resetNumbers()}>Reiniciar</button>
          </div>

          <p class="current-list"><strong>Lista actual:</strong> {this.numbers.join(', ')}</p>

          <button onClick={() => this.startSorting()} disabled={this.numbers.length === 0}>
            Ordenar ({this.sortOrder === 'asc' ? 'Ascendente' : 'Descendente'})
          </button>

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
      </div>
    );
  }
}
