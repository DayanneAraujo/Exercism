export const nucleotides = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = dna => {
  let transcription = dna.toUpperCase().split('');
  return transcription.map(nucleotide => nucleotides[nucleotide]).join('');
}
