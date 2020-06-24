//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const codon_protein = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
}

const getCodonsList = (rna) => {
  return rna ? rna.match(/.{1,3}/g) : [];
}

export const translate = (rna) => {
  const proteins = [];
  const codons = getCodonsList(rna);

  for (let i = 0; i < codons.length; i++) {
    let codon = codons[i];

    if (codon_protein[codon] === 'STOP'){
      return proteins;
    }

    else if (codon_protein[codon]) {
        proteins.push(codon_protein[codon]);
    }

    else {
      throw new Error('Invalid codon');
    }
  }
  return proteins;
};
