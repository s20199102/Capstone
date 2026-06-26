// questions.js
// 문제를 추가할 때는 아래 형식대로 객체 하나를 복사해서 채우면 됩니다.
// answer는 0부터 셉니다 (첫 번째 보기 = 0, 두 번째 = 1, ...)

const questions = [
  {
    unit: "Unit 1: Atomic Structure and Properties",
    q: "Which subatomic particle determines the atomic number of an element?",
    options: ["Neutron", "Electron", "Proton", "Nucleon"],
    answer: 2,
    explanation: "The atomic number equals the number of protons in the nucleus."
  },
  {
    unit: "Unit 1: Atomic Structure and Properties",
    q: "The most important experimental information used to deduce the structure of the atom was:",
    options: [
      "Density of each element",
      "Specific heat capacity",
      "Emission spectrum of elements, particularly hydrogen",
      "X-rays emitted from each element"
    ],
    answer: 2,
    explanation: "Hydrogen's emission spectrum revealed quantized energy levels, key to atomic structure."
  },
  {
    unit: "Unit 3: Intermolecular Forces and Properties",
    q: "A sealed, rigid container contains 28.0 g of nitrogen, 40.0 g of argon, and 36.0 g of water vapor. If the total pressure is 2.0 atm, what is the partial pressure of nitrogen?",
    options: ["0.33 atm", "0.40 atm", "0.50 atm", "2.0 atm"],
    answer: 2,
    explanation: "Moles: N₂=1.0, Ar=1.0, H₂O=2.0, total=4.0. Mole fraction of N₂ = 0.25, so 0.25 × 2.0 atm = 0.50 atm."
  },
  {
    unit: "Unit 3: Intermolecular Forces and Properties",
    q: "A sample of liquid NH₃ is brought to its boiling point. Which occurs during boiling?",
    options: [
      "The N-H bonds within NH₃ molecules break apart.",
      "The temperature rises as molecules speed up.",
      "The energy within the system remains constant.",
      "The hydrogen bonds holding separate NH₃ molecules together break apart."
    ],
    answer: 3,
    explanation: "Boiling breaks intermolecular forces (hydrogen bonds), not the covalent N-H bonds within molecules."
  },
  {
    unit: "Unit 3: Intermolecular Forces and Properties",
    q: "The units for R, the ideal gas law constant, may be:",
    options: [
      "L atm mol⁻¹ K⁻¹",
      "J mol⁻¹ K⁻¹",
      "volt coulomb mol⁻¹ K⁻¹",
      "A, B, and C"
    ],
    answer: 3,
    explanation: "R can be expressed in all of these unit combinations depending on the context."
  },
  {
    unit: "Unit 5: Kinetics",
    q: "Why does increasing the concentration of a reactant typically increase the reaction rate?",
    options: [
      "It increases the molar mass",
      "It lowers activation energy",
      "It leads to more collisions per unit time",
      "It changes the enthalpy of reaction"
    ],
    answer: 2,
    explanation: "Higher concentration means more frequent collisions between reactant particles per unit time."
  },
  {
    unit: "Unit 5: Kinetics",
    q: "A reaction is first-order in A. If [A] = 0.40 M and k = 0.20 s⁻¹, what is the rate?",
    options: ["0.08 M/s", "0.50 M/s", "0.20 M/s", "0.80 M/s"],
    answer: 0,
    explanation: "Rate = k[A] = 0.20 × 0.40 = 0.08 M/s."
  },
  {
    unit: "Unit 5: Kinetics",
    q: "Given Rate = k[A][B]², what is the order of the reaction?",
    options: ["First-order", "Second-order", "Third-order", "Zero-order"],
    answer: 2,
    explanation: "Overall order = sum of exponents = 1 + 2 = 3, so third-order."
  },
  {
    unit: "Unit 7: Equilibrium",
    q: "Which of the following is considered an acid anhydride?",
    options: ["HCl", "H₂SO₃", "SO₂", "Al(NO₃)₃"],
    answer: 2,
    explanation: "SO₂ reacts with water to form H₂SO₃, making it an acid anhydride (a nonmetal oxide)."
  },
  {
    unit: "Unit 8: Acids and Bases",
    q: "CH₃NH₂ + H₂O ↔ OH⁻ + CH₃NH₃⁺. Which best represents equilibrium concentrations?",
    options: [
      "[OH⁻] > [CH₃NH₂] = [CH₃NH₃⁺]",
      "[OH⁻] = [CH₃NH₂] = [CH₃NH₃⁺]",
      "[CH₃NH₂] > [OH⁻] > [CH₃NH₃⁺]",
      "[CH₃NH₂] > [OH⁻] = [CH₃NH₃⁺]"
    ],
    answer: 3,
    explanation: "Methylamine is a weak base, so most stays unreacted: [CH₃NH₂] is largest, and [OH⁻] = [CH₃NH₃⁺] from the 1:1 stoichiometry."
  }
];