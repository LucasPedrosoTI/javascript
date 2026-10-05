// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      // console.log(
      //   `${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`
      // );
      return percentOfDNAshared;
    },
    willLikelySurvive() {
      const cGBaseCount = this.dna.reduce((acc, _, idx, arr) => {
        if (arr[idx] === "C" || arr[idx] === "G") return acc + 1;
        return acc;
      }, 0);

      return cGBaseCount / this.dna.length >= 0.6;
    },

    complementStrand() {
      return this.dna.map((base) => {
        if (base === "A") return "T";
        if (base === "T") return "A";
        if (base === "C") return "G";
        if (base === "G") return "C";
      });
    },
  };
};

const buildSample = () => {
  const survivingSpecimen = [];
  let counter = 1;

  for (let i = 0; counter <= 30; i++) {
    const newOrg = pAequorFactory(i, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
      counter++;
    }
  }

  return survivingSpecimen;
};

const findMostRelated = (sample) => {
  const sampleCopy = sample;
  let testSpecimenA;
  let testSpecimenB;
  let highestPercentage = 0;
  for (let i = 0; i < sample.length; i++) {
    for (let j = 0; j < sampleCopy.length; j++) {
      if (sample[i].specimenNum !== sampleCopy[j].specimenNum) {
        let currPercentage = sample[i].compareDNA(sampleCopy[j]);
        if (currPercentage > highestPercentage) {
          highestPercentage = currPercentage;
          testSpecimenA = sample[i];
          testSpecimenB = sampleCopy[j];
        }
      }
    }
  }

  console.log(
    `The specimen with closes DNA are the ${
      testSpecimenA.specimenNum
    } and the ${
      testSpecimenB.specimenNum
    } with match of ${highestPercentage.toFixed()}%`
  );
};

// const sample = buildSample();
// findMostRelated(sample);

// console.log(sample.length);

// console.log(exAequor.dna);
// console.log(exAequor.complementStrand());

// // console.log(exAequor.mutate());

// // exAequor.compareDNA(exAequor2);

// console.log(exAequor.willLikelySurvive());
