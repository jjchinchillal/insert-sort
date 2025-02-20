export function insertionSort(arr: number[], order: 'asc' | 'desc'): { sortedArray: number[], steps: string[] } {
    let sorted = [...arr];
    let steps = [`Comenzando con la lista: [${sorted.join(', ')}]`];
  
    for (let i = 1; i < sorted.length; i++) {
      let key = sorted[i];
      let j = i - 1;
      steps.push(`🔍 Comparando ${key} con los elementos anteriores...`);
  
      while (j >= 0 && (order === 'asc' ? sorted[j] > key : sorted[j] < key)) {
        sorted[j + 1] = sorted[j];
        j--;
        steps.push(`🔄 Moviendo ${sorted[j + 1]} a la derecha`);
      }
  
      sorted[j + 1] = key;
      steps.push(`✅ Insertando ${key} en su posición correcta: [${sorted.join(', ')}]`);
    }
  
    steps.push(`🎉 Lista ordenada (${order === 'asc' ? 'Ascendente' : 'Descendente'}): [${sorted.join(', ')}]`);
    return { sortedArray: sorted, steps };
  }
  