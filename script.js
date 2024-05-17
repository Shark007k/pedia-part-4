const questions = [
    
    {
        question: "Identify the correct statement from the following.",
        answers: [
          { text: "Children with pica are at increased risk of megaloblastic anemia.", correct: false },
          { text: "Breath-holding spells are associated with hypertonia.", correct: false },
          { text: "Thumb sucking in a child is a way of discharging tension.", correct: true },
          { text: "Bedwetting after a period of 3 months of dryness at night is called secondary enuresis", correct: false },
        ],
      },
    
    {
        question: "20/20 vision is attained by the age of",
        answers: [
          { text: " 2 years", correct: false },
          { text: "3 years", correct: false },
          { text: "6 years", correct: true },
          { text: "At birth", correct: false },
        ],
      },
    
    
    {
        question: "MCHAT is a screening tool for the detection of",
        answers: [
          { text: "ADHD", correct: false },
          { text: "Autism", correct: true },
          { text: "Substance abuse in adolescents", correct: false },
          { text: "Postpartum depression", correct: false },
        ],
      },
    
    
     {
        question: "A 17-year-old girl presented with primary amenorrhoea. On physical examination, her breast and areola are enlarged without separation of their contours. What is the sexual maturity rating in this girl?",
        answers: [
          { text: "SMR stage 1", correct: false },
          { text: "SMR stage 2", correct: false },
          { text: "SMR stage 3", correct: true },
          { text: "SMR stage 4", correct: false },
        ],
      },
    
    {
        question: "Earliest SMR stage by which sperms can be found in the urine of a boy is",
        answers: [
          { text: "Stage 2", correct: false },
          { text: "Stage 3", correct: true },
          { text: "Stage 4", correct: false },
          { text: "Stage 5", correct: false },
        ],
      },
    
    
    {
        question: "Identify the correct statement.",
        answers: [
          { text: "Macrocephaly is defined as an occipitofrontal circumference greater than 3 SD above the mean for age and sex.", correct: false },
          { text: "Monosomy 1 p36 is associated with macrocephaly", correct: false },
          { text: "Microcephaly is defined as an occipitofrontal circumference more than 3 SD below the mean for age and sex.", correct: true },
          { text: "Infants with benign familial megalencephaly have normal head circumference at birth", correct: false },
        ],
      },
    
    
     {
        question: "Plagiocephaly is a type of craniosynostosis involving the premature fusion of",
        answers: [
          { text: "Metopic suture", correct: false },
          { text: "Both coronal sutures", correct: false },
          { text: "Lambdoid suture", correct: true },
          { text: "Sagittal suture", correct: false },
        ],
      },
    
    {
        question: "A 7 -year-old boy was found to have a height for age and gender to be 2 standard deviations below the median. Furthermore, his bone age was found to be equal to chronological age. Which of the following is most likely?",
        answers: [
          { text: "Familial short stature", correct: true },
          { text: "Constitutional delay", correct: false },
          { text: "Undernutrition", correct: false },
          { text: "Growth hormone deficiency", correct: false },
        ],
      },
    
    
    {
        question: "The predominant site of hematopoiesis in the fetus during mid-pregnancy is the",
        answers: [
          { text: "Yolk sac", correct: false },
          { text: "Liver", correct: true },
          { text: "Spleen", correct: false },
          { text: "Bone marrow", correct: false },
        ],
      },
    
    
     {
        question: "Embryonic hemoglobin is ____ _",
        answers: [
          { text: "Hb Iwata", correct: false },
          { text: "Hb Portland", correct: true },
          { text: "Hb Kansas", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    {
        question: "When does hemoglobin synthesis switch from HbF to HbA?",
        answers: [
          { text: "At 8 weeks of intrauterine life", correct: false },
          { text: "At 24 weeks of intrauterine life", correct: false },
          { text: "At 38 weeks of intrauterine life", correct: true },
          { text: "At 6 months of postnatal life", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following statements is true about fetal hemoglobin?",
        answers: [
          { text: "HbF accounts for 100% of the total hemoglobin at term.", correct: false },
          { text: "HbF is resistant to alkali denaturation.", correct: true },
          { text: "HbF has lower affinity for oxygen than HbA.", correct: false },
          { text: "HbF has higher 2,3 bisphosphoglycerate levels than HbA.", correct: false },
        ],
      },
    
    
    
     {
        question: "What is the lifespan of neonatal RBCs?",
        answers: [
          { text: "90-120 days", correct: false },
          { text: "60-90 days", correct: true },
          { text: "45-60 days", correct: false },
          { text: "30-45 days", correct: false },
        ],
      },
    
    {
        question: "You are handed the blood report of a preschool child. Below what level of haemoglobin (Hb) would you diagnose anaemia in this child?",
        answers: [
          { text: "< 13 g/dL", correct: false },
          { text: "< 12 g/dL", correct: false },
          { text: " < 11.5 g/dL", correct: false },
          { text: "< 11 g/dL", correct: true },
        ],
      },
    
    
    {
        question: "The most common cause of anemia in children is",
        answers: [
          { text: "Congenital hypoplastic anemia", correct: false },
          { text: "Acquired hypoproliferative anemia", correct: true },
          { text: "Congenital hemoglobinopathies", correct: false },
          { text: "Hyperproliferative anemia", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following statements is true for iron absorption?",
        answers: [
          { text: "Breast milk has higher iron content than cow's milk.", correct: false },
          { text: "Cow's milk has higher oral bio-availability of iron than breast milk.", correct: false },
          { text: "Introduction of cow's milk at 6 months of age decreases the risk of iron deficiency", correct: false },
          { text: "None of the above", correct: true },
        ],
      },
    
    {
        question: "The earliest hematological0 response to iron therapy in iron-deficiency anemia is",
        answers: [
          { text: "Reticulocytosis", correct: false },
          { text: "Increase in hemoglobin level", correct: false },
          { text: "Increase in ferritin levels", correct: false },
          { text: "Bone marrow erythroid hyperplasia", correct: true },
        ],
      },
    
    
    {
        question: "A child who was diagnosed 3 months back with iron deficiency anaemia presents with low haemoglobin despite being on oral iron therapy. What is the most likely cause for the low haemoglobin?",
        answers: [
          { text: "Poor compliance", correct: true },
          { text: "Incorrect dose or formulation", correct: false },
          { text: "Occult blood loss from parasitic infestations", correct: false },
          { text: "Thalassemia misdiagnosed as iron deficiency anemia", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is true about the Weekly Iron and Folic Acid Supplementation (WIFS) Programme?",
        answers: [
          { text: "It was launched by the Ministry of Health and Family Welfare.", correct: true },
          { text: "It is meant exclusively for adolescent school gir1s between 10-19 years of age.", correct: false },
          { text: "It exclusively covers government schools in rural India.", correct: false },
          { text: "It recommends that administration of 50 mg of elemental iron.", correct: false },
        ],
      },
    
    {
        question: "The population covered under the National Iron-Plus Initiative includes children between the ages of------",
        answers: [
          { text: "6 - 60 months", correct: true },
          { text: "5 -10 years", correct: false },
          { text: "10 - 19 years", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following statements is true for folate deficiency anemia?",
        answers: [
          { text: "Breast milk is deficient in folate", correct: false },
          { text: "Folate-deficient mother's give birth to infants with folate deficiency.", correct: false },
          { text: "Methylenetetrahydrofolate (MTHFR) deficiency is associated with megaloblastic anemia", correct: false },
          { text: "None of the above", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following is false regarding Imerslund-Grasbeck syndrome (IGS)?",
        answers: [
          { text: "Congenital cobalamin malabsorption", correct: false },
          { text: "Mutation of gene AMN", correct: false },
          { text: "Autosomal-dominant disorder", correct: true },
          { text: "Associated with non-specific proteinuria", correct: false },
        ],
      },
    
    {
        question: "A child presents with megaloblastic anemia that is unresponsive to vitamin C, vitamin B12, and folic acid, but responsive to uridine. What do you suspect?",
        answers: [
          { text: "Thiamine deficiency", correct: false },
          { text: "Liver disease", correct: false },
          { text: "Pernicious anemia", correct: false },
          { text: "Orotic aciduria", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following statements about hemoglobinopathies and their mechanisms is true?",
        answers: [
          { text: "HbS is due to substitution of lysine for glutamine in the 6th position of the beta-globin gene", correct: false },
          { text: "HbH is the deletion of three alpha- globin genes.", correct: true },
          { text: "Hb Bart is the deletion of all four beta- globin genes.", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
     {
        question: "A 5-year-old Sindhi child presented with pallor and massive hepatosplenomegaly. Which of the following is the most likely iron profile in this patient?",
        answers: [
          { text: "Iron- low, Ferritin-low, TIBC-high, TSAT-  low", correct: false },
          { text: "Iron-normal, Ferritin-normal, TIBC- low, TSAT-normal", correct: true },
          { text: "Iron-low, ferritin-high, TIBC-low, TSAT- low", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "A 9-month-old boy presented with progressive pallor and abdominal distention. On investigations, he had low Hb. Which of the following red cell indices can be used to distinguish thalassemia from iron deficiency anaemia?",
        answers: [
          { text: "MCV", correct: false },
          { text: "MCH", correct: false },
          { text: "MCV/ RBC count", correct: true },
          { text: "All of the above", correct: false },
        ],
      },
    
    
    {
        question: "Hemoglobin electrophoresis pattern in transfusion-dependent thalassemia is",
        answers: [
          { text: "HbA=95%, HbA2=3.5%, HbF =1.5%", correct: false },
          { text: "HbA=90%, HbA2=5%, HbF=5%", correct: false },
          { text: "HbA=45%, HbA2=5%, HbF=50%", correct: false },
          { text: "HbA=0%, HbA2=5%, HbF=95%", correct: true },
        ],
      },
    
    
     {
        question: "The finding seen on skull X-ray image shown below is due to ___ _",
        answers: [
          { text: "Ineffective erythropoiesis", correct: false },
          { text: "Extramedullary hematopoiesis", correct: false },
          { text: "Widening of the diploic space", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "You are evaluating a 4-year-old child with β-thalassemia major. He has been on chronic transfusion therapy since the age of 1 year. You suspect transfusion-induced iron overload. The child has an increased risk of developing which among the following infections?",
        answers: [
          { text: "Streptococcus pneumoniae", correct: false },
          { text: "Mycoplasma pneumoniae", correct: false },
          { text: "Yersinia enterocolitica", correct: true },
          { text: "No risk of infections", correct: false },
        ],
      },
    
    
    {
        question: "A true statement about Diamond-Blackfan anemia is that ------",
        answers: [
          { text: "Short stature, craniofacial abnormalities, and triphalangeal thumb are common features.", correct: true },
          { text: "Peripheral smear shows microcytic hypochromic anemia with reticulocytosis", correct: false },
          { text: "Bone marrow failure includes erythroid, myeloid and megakaryocytic lineages.", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
     {
        question: "The most common genetic mutation seen in autosomal-dominant hereditary spherocytosis is ------",
        answers: [
          { text: "Spectrin", correct: false },
          { text: "Ankyrin", correct: true },
          { text: "Band 3", correct: false },
          { text: "Band 4.2", correct: false },
        ],
      },
    
    {
        question: "Hemolytic anemia with typical cells shown in the peripheral smear below is seen in -----",
        answers: [
          { text: "Hemolytic uremic syndrome", correct: false },
          { text: "Glucose 6-phospnate dehydrogenase deficiency", correct: false },
          { text: "Hereditary stomatocytosis", correct: false },
          { text: "Abetalipoproteinemia", correct: true },
        ],
      },
    
    
    {
        question: "A type of hemolytic anemia with a cytoskeletal protein defect causing extreme variation in RBC size and shape is--------",
        answers: [
          { text: "Hereditary spherocytosis", correct: false },
          { text: "Hereditary elliptocytosis", correct: true },
          { text: "Hereditary pyropoikilocytosis", correct: false },
          { text: "Hereditary stomatocytosis", correct: false },
        ],
      },
    
    
     {
        question: "A 14-month·old child with Hb 6.3 was undergoing repeated blood transfusion. The last transfusion was given in the 9th month. Which of the following investigation is used for a definitive diagnosis?",
        answers: [
          { text: "HPLC", correct: false },
          { text: "Ferritin", correct: false },
          { text: "Bone marrow aspiration", correct: false },
          { text: "Globin gene sequencing", correct: true },
        ],
      },
    
    {
        question: "A newborn child born to a mother with sickle cell disease is to be screened for sickle  cell anaemia. Which of the following tests can be used?",
        answers: [
          { text: "Hemoglobin electrophoresis", correct: false },
          { text: "High-performance liquid chromatography", correct: true },
          { text: "Heel-prick Guthrie test", correct: false },
          { text: "Tandem mass spectrometry", correct: false },
        ],
      },
    
    
    {
        question: "Which fungal infection spreads in neonates through the care giver's hand?",
        answers: [
          { text: "Candida albicans", correct: false },
          { text: "Candida parapsilosis", correct: true },
          { text: "Candida tropicalis", correct: false },
          { text: "Candida glabrata", correct: false },
        ],
      },
    
    
    
     {
        question: "A 15-year-old boy with sickle cell disease presents to the emergency room with chest pain and respiratory distress. Pulse oximetry shows 85% on room air. Chest X-ray at admission is shown below. Sputum and blood culture showed no growth. What is the correct treatment for this condition?",
        answers: [
          { text: "Incentive spirometry", correct: false },
          { text: "Empirical antibiotics", correct: false },
          { text: "Blood transfusion therapy", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "A 6-month-old boy with a known diagnosis of sickle cell disease presents with fever and painful swelling of hands and feet. Which of the following is the drug of choice to prevent painful crises in sickle cell anaemia?",
        answers: [
          { text: "Hydrocodone", correct: false },
          { text: "Hydroxyurea", correct: true },
          { text: "Corticosteroids", correct: false },
          { text: "Ruxolitinib", correct: false },
        ],
      },
    
    
    {
        question: "Prophylactic measures in children with sickle cell anemia include",
        answers: [
          { text: "Oral penicillin prophylaxis up to 5 years of age", correct: false },
          { text: "Annual transcranial Doppler ultrasound from the age of 2 years", correct: false },
          { text: "Annual ophthalmology screening from the age of 10 years", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    
     {
        question: "The most common congenital hemolytic anemia due to enzyme defects is",
        answers: [
          { text: "Deficiency of an enzyme in glycolysis pathway", correct: false },
          { text: "Deficiency of an enzyme in Hexose monophosphate pathway", correct: true },
          { text: "Deficiency of an enzyme in Krebs’s cycle", correct: false },
          { text: "Deficiency of an enzymes in fructose metabolism pathway", correct: false },
        ],
      },
    
    {
        question: "Non-immune hydrops fetalis is caused by _",
        answers: [
          { text: "Alpha thalassemia", correct: false },
          { text: "Paivovirus B19 infection", correct: false },
          { text: "Both A and B", correct: true },
          { text: "None of the above", correct: false },
        ],
      },
    
    
    {
        question: "A previously healthy 3-year-old girl was brought to the OPD with sudden onset of generalized petechiae. You had seen her for running nose and cough one month ago. Her current blood tests are likely to show _",
        answers: [
          { text: "Normal bleeding time", correct: false },
          { text: "Prolonged prothrombin time", correct: false },
          { text: "Normal platelet count", correct: false },
          { text: "None of the above", correct: true },
        ],
      },
    
    
     {
        question: "Treatment of choice of ITP with mild symptoms is _",
        answers: [
          { text: "Corticosteroids", correct: false },
          { text: "Intravenous anti-D", correct: false },
          { text: "Intravenous immunoglobulin", correct: false },
          { text: "None of the above", correct: true },
        ],
      },
    
    {
        question: "Glanzmann's thrombasthenia is a disorder of",
        answers: [
          { text: "Platelet adhesion", correct: false },
          { text: "Platelet activation", correct: false },
          { text: "Platelet aggregation", correct: true },
          { text: "Clotting factor deficiency", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is the most common congenital bleeding disorder?",
        answers: [
          { text: "Hemophilia A", correct: false },
          { text: "Hemophilia B", correct: false },
          { text: "Von Willebrand disease", correct: true },
          { text: "Factor VII deficiency", correct: false },
        ],
      },
    
    
     {
        question: "Prolonged bleeding time, large platelets with normal platelet count and normal aPTT are seen in __",
        answers: [
          { text: "Bernard-Soulier disease", correct: true },
          { text: "Glanzmann's thrombasthenia", correct: false },
          { text: "von Willebrand disease", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    {
        question: "Ristocetin aggregation test is abnormal in",
        answers: [
          { text: "von Willebrand disease", correct: false },
          { text: "Bernard-Soulier syndrome", correct: false },
          { text: "Glanzmann thrombasthenia", correct: false },
          { text: "Both A and B", correct: true },
        ],
      },
    
    
    {
        question: "A qualitative defect in von Willebrand factor is seen in _",
        answers: [
          { text: "Type 1 Von Willebrand disease", correct: false },
          { text: "Type 2 Von Willebrand disease", correct: true },
          { text: "Type 4 Von Willebrand disease", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
    
     {
        question: "von Willebrand disease associated with thrombocytopenia is",
        answers: [
          { text: "Type 2M", correct: false },
          { text: "Type 2N", correct: false },
          { text: "Type2A", correct: false },
          { text: "Type 2B", correct: true },
        ],
      },
    
    {
        question: "Intramuscular injection of 0.5-1 mg of phytonadione is given to all newborn infants at birth because of a transient deficiency of _",
        answers: [
          { text: "Factor V", correct: false },
          { text: "Factor VII", correct: true },
          { text: "Factor VIII", correct: false },
          { text: "Factor XI", correct: false },
        ],
      },
    
    
    {
        question: "The most common bleeding manifestation seen in severe hemophilia is",
        answers: [
          { text: "Recurrent hematomas", correct: false },
          { text: "Recurrent hemarthrosis", correct: true },
          { text: "Hematuria", correct: false },
          { text: "intracranial hemorrhage", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following factor deficiencies are matched to the correct disease?",
        answers: [
          { text: "Factor v deficiency - Stuart-Prower disease", correct: false },
          { text: "Factor IX deficiency - Parahemophllia", correct: false },
          { text: "Factor x deficiency - Christmas disease", correct: false },
          { text: "Factor XI deficiency - Hemophilia C", correct: true },
        ],
      },
    
    {
        question: "Dinesh, a 2-year-old boy presented with a painful left ankle swelling and difficulty walking. In the past, he had presented with significant hematomas at immunization sites. On investigation, he was found to have haemophilia A. What is the treatment of choice in this condition?",
        answers: [
          { text: "Cryoprecipitate", correct: false },
          { text: "Fresh frozen plasma", correct: false },
          { text: "Prothrombin complex concentrates (PCCs)", correct: false },
          { text: "Factor VIII concentrate", correct: true },
        ],
      },
    
    
    {
        question: "Following delivery, a neonate is found to have delayed umbilical stump bleeding lasting for the last one month. Which among the following factor deficiencies is most likely in this child?",
        answers: [
          { text: "Factor VII deficiency", correct: false },
          { text: "Factor IX deficiency", correct: false },
          { text: "Factor XI deficiency", correct: false },
          { text: "Factor XIII deficiency", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following is not a classical feature of inborn errors of metabolism (IEM)?",
        answers: [
          { text: "Irritability and incessant crying", correct: true },
          { text: "Poor feeding", correct: false },
          { text: "Vomiting", correct: false },
          { text: "Convulsions", correct: false },
        ],
      },
    
    {
        question: "A 7-year-old child is brought to the OPD with a history of mental retardation, failure to walk or talk, failure to grow, seizures, hyperactivity, and tremors. On examination, there is microcephaly, fair hair, light skin color, and blue eyes. What is the most probable diagnosis?",
        answers: [
          { text: "Oculocutaneous albinism", correct: false },
          { text: "Phenylketonuria", correct: true },
          { text: "Alkaptonuria", correct: false },
          { text: "Tyrosinemia", correct: false },
        ],
      },
    
    
    {
        question: "A 5-month-old infant born to consanguineous parents presented with global developmental delay and seizures. The child had a characteristic mousy odour. Which among the following is the most likely diagnosis?",
        answers: [
          { text: "Phenylketonuria", correct: true },
          { text: "Tyrosinemia", correct: false },
          { text: "Hawkinsinuria", correct: false },
          { text: "Hypermethioninemia", correct: false },
        ],
      },
    
    
     {
        question: "CNS damage in patients with phenylketonuria (PKU) is due to _",
        answers: [
          { text: "Hyperphenylalaninemia", correct: true },
          { text: "Hypotyrosinemia", correct: false },
          { text: "Phenylpyruvate", correct: false },
          { text: "Phenylacetate", correct: false },
        ],
      },
    
    {
        question: "Phenylketonuria can be caused by the deficiency of _",
        answers: [
          { text: "Phenylalanine hydroxylase (PAH)", correct: false },
          { text: "Tetrahydrobiopterin (BH4)", correct: false },
          { text: "Both A and B", correct: true },
          { text: "None of the above", correct: false },
        ],
      },
    
    
    {
        question: "In phenylketonuria, which of the following phenylketones is excreted in urine?",
        answers: [
          { text: "Phenylalanine", correct: false },
          { text: "Phenylpyruvate", correct: true },
          { text: "Acetoacetate", correct: false },
          { text: "Both b and c", correct: false },
        ],
      },
    
    
    
     {
        question: "The mainstay of the treatment of PKU is",
        answers: [
          { text: "Phenylalanine-free diet", correct: false },
          { text: "Low phenylalanine diet", correct: true },
          { text: "High phenylalanine diet", correct: false },
          { text: "Tyrosine supplementation", correct: false },
        ],
      },
    
    {
        question: "A 2-month-old infant presented with abdominal distention and increased irritability for 10 days. Physical examination showed jaundice, hepatomegaly and a boiled cabbage odour. Which among the following is the most likely diagnosis?",
        answers: [
          { text: "Tyrosinemia", correct: true },
          { text: "Isovaleric acidemia", correct: false },
          { text: "Hawkinsinuria", correct: false },
          { text: "Phenylketonuria", correct: false },
        ],
      },
    
    
    {
        question: "Hereditary tyrosinemia type 1 is caused by the deficiency of _",
        answers: [
          { text: "Tyrosine hydroxylase", correct: false },
          { text: "Tyrosine aminotransferase", correct: false },
          { text: "4-HPPD", correct: false },
          { text: "Fumarylacetoacetate hydrolase", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following is not a feature of hereditary tyrosinemia type 1?",
        answers: [
          { text: "Acute hepatic crisis", correct: false },
          { text: "Acute peripheral neuropathy", correct: false },
          { text: "Chronic kidney disease", correct: false },
          { text: "Corneal ulceration", correct: true },
        ],
      },
    
    {
        question: "Richner-Hanhart syndrome is _",
        answers: [
          { text: "Hereditary tyrosinemia type 1", correct: false },
          { text: "Hereditary tyrosinemia type 2", correct: true },
          { text: "Hereditary tyrosinemia type 3", correct: false },
          { text: "Hawkinsinuria", correct: false },
        ],
      },
    
    
    {
        question: "A 2-year-old girl presented with photophobia and speech delay. On examination, she had bilateral herpetiform corneal ulcers and painful hyperkeratotic plaques on the palms and soles. Which among the following is the most likely diagnosis?",
        answers: [
          { text: "HSV type 1", correct: false },
          { text: "HSV type 2", correct: false },
          { text: "Hereditary Tyrosinemia Type 1", correct: false },
          { text: "Hereditary Tyrosinemia Type 2", correct: true },
        ],
      },
    
    
     {
        question: "Oculocutaneous tyrosinemia is caused by the deficiency of _",
        answers: [
          { text: "Tyrosine hydroxylase", correct: false },
          { text: "Tyrosine aminotransferase", correct: true },
          { text: "4-Hydroxyphenylpyruvate dioxygenase (HPPD)", correct: false },
          { text: "Fumarylacetoacetate hydrolase", correct: false },
        ],
      },
    
    {
        question: "Primary deficiency of 4-HPPD causes",
        answers: [
          { text: "Hereditary tyrosinemia type 1", correct: false },
          { text: "Hereditary tyrosinemia type 2", correct: false },
          { text: "Hereditary tyrosinemia type 3", correct: true },
          { text: "Hawkinsinuria", correct: false },
        ],
      },
    
    
    {
        question: "Swimming-pool' odor is characteristically seen in _",
        answers: [
          { text: "Maple syrup urine disease", correct: false },
          { text: "Isovaleric acidemia", correct: false },
          { text: "Hawkinsinuria", correct: true },
          { text: "Phenylketonuria", correct: false },
        ],
      },
    
    
     {
        question: "The most common acquired cause for increased plasma tyrosine levels is",
        answers: [
          { text: "Hepatorenal tyrosinemia", correct: false },
          { text: "Oculocutaneous tyrosinemia", correct: false },
          { text: "Alkaptonuria", correct: false },
          { text: "Transient tyrosinemia of the newborn", correct: true },
        ],
      },
    
    {
        question: "The following condition is characterised by deficiency of _",
        answers: [
          { text: "Beta-carotene", correct: false },
          { text: "Tyrosine aminotransferase", correct: false },
          { text: "L-ascorbic acid", correct: false },
          { text: "Homogentisic acid oxidase", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following can be used in the treatment of alkaptonuria?",
        answers: [
          { text: "Nitisinone", correct: true },
          { text: "Thiamine", correct: false },
          { text: "Folic acid", correct: false },
          { text: "Pyridoxine", correct: false },
        ],
      },
    
    
    
     {
        question: "An 8-month-old boy presented with lethargy, failure to thrive and developmental delay. On investigation, he had elevated levels of homocysteine in blood and homocystinuria. Which of the following can lead to the above finding?",
        answers: [
          { text: "Cystathionineβ -Synthase Deficiency", correct: false },
          { text: "Defects in methylcobalamin formation", correct: false },
          { text: "Deficiency of methylenetetrahydrofolate reductase", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "Which of the following is not a manifestation of homocystinuria?",
        answers: [
          { text: "Ectopia lentis", correct: false },
          { text: "Intellectual disability", correct: false },
          { text: "Short stature", correct: true },
          { text: "Thromboembolic episodes", correct: false },
        ],
      },
    
    
    {
        question: "Pellagra-like symptoms are seen in the deficiency of",
        answers: [
          { text: "Tyrosine", correct: false },
          { text: "Tryptophan", correct: true },
          { text: "Threonine", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is false regarding Hartnup disease?",
        answers: [
          { text: "Defect in the transport of monoamino- monocarboxylic amino acids, includingtryptophan, is seen.", correct: false },
          { text: "Deficiency of BOAT1 protein occurs in the intestine and renal tubules", correct: false },
          { text: "Pellagra-like rash may develop in symptomatic patients.", correct: false },
          { text: "Treatment is with supplementation of tryptophan.", correct: true },
        ],
      },
    
    {
        question: "A 6-year-old boy develops hypoglycemia and muscle weakness with moderate activity. On examination, he had hepatomegaly and growth restriction. Investigations revealed accumulation of limit dextrins and increased glycogen deposits in the liver. What is the most likely diagnosis?",
        answers: [
          { text: "Cori's disease", correct: true },
          { text: "von Gierke's disease", correct: false },
          { text: "Anderson's disease", correct: false },
          { text: "Pompe's disease", correct: false },
        ],
      },
    
    
    {
        question: "A 6-month-old child presents with episodes of vomiting after ingesting fruit juice. Which of the following enzyme deficiency is likely?",
        answers: [
          { text: "Aldolase B", correct: true },
          { text: "Fructokinase", correct: false },
          { text: "Glucose 6-phosphatase", correct: false },
          { text: "Hexokinase", correct: false },
        ],
      },
    
    
     {
        question: "A 3-day-old child is suspected to have an inborn error of metabolism. Further evaluation reveals elevated blood ammonia in the presence of normal blood pH and bicarbonate levels. There are no ketone bodies in the urine. Which of the following is the most likely diagnosis?",
        answers: [
          { text: "Organic aciduria", correct: false },
          { text: "Disorders of amino acid metabolism", correct: false },
          { text: "Urea cycle defect", correct: true },
          { text: "Galactosemia", correct: false },
        ],
      },
    
    {
        question: "An 8-month-old girl with a known urea cycle defect presented with acute onset vomiting, abdominal distension and hypotonia. On investigation, blood ammonia was. markedly elevated. Which of the following is used to lower the ammonia levels?",
        answers: [
          { text: "Sodium benzoate", correct: false },
          { text: "Sodium phenylacetate", correct: false },
          { text: "Arginine hydrochloride", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    
    {
        question: "A neonate with friable tufted hair had elevated plasma ammonia levels and argininosuccinate levels. What is the most likely diagnosis?",
        answers: [
          { text: "Argininemia", correct: false },
          { text: "Argininosuccinic aciduria", correct: true },
          { text: "Hyperammonemia type 1", correct: false },
          { text: "Hyperammonemia type 2", correct: false },
        ],
      },
    
    
     {
        question: "Citrullinemia type 1 is caused by deficiency of the enzyme",
        answers: [
          { text: "Citrin deficiency", correct: false },
          { text: "Argininosuccinate synthetase (ASS)", correct: true },
          { text: "Argininosuccinate lyase", correct: false },
          { text: "Arginase deficiency", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not a component of HHH syndrome?",
        answers: [
          { text: "Hyperuricemia", correct: true },
          { text: "Hyperammonemia", correct: false },
          { text: "Hyperomithinemia", correct: false },
          { text: "Homocitrullinemia", correct: false },
        ],
      },
    
    
    {
        question: "An infant is suspected to have IEM. Further evaluation reveals hyperammonemia +, acidosis+, ketosis+. The most likely diagnosis is",
        answers: [
          { text: "Tyrosinemia", correct: false },
          { text: "Galactosemia", correct: false },
          { text: "Phenylketonuria", correct: false },
          { text: "Organic aciduria", correct: true },
        ],
      },
    
    
    
     {
        question: "A 10-day-old male infant presented with poor feeding, multiple cyanotic episodes and recurrent generalized convulsions. A peculiar maple syrup odour was present in urine. What is the deficient enzyme in this condition?",
        answers: [
          { text: "Branched-chain α-ketoacid dehydrogenase", correct: true },
          { text: "Isovaleryl CoA dehydrogenase", correct: false },
          { text: "Pyruvate carboxylase", correct: false },
          { text: "Acetyl CoA carboxylase", correct: false },
        ],
      },
    
    {
        question: "The characteristic odor of sweaty feet may be present in",
        answers: [
          { text: "Tyrosinemia", correct: false },
          { text: "Multiple carboxylase deficiency", correct: false },
          { text: "Trimethylaminuria", correct: false },
          { text: "Isovaleric acidemia", correct: true },
        ],
      },
    
    
    {
        question: "Tomcat urine is characteristically seen in",
        answers: [
          { text: "Tyrosinemia", correct: false },
          { text: "Multiple carboxylase deficiency", correct: true },
          { text: "Phenylketonuria", correct: false },
          { text: "Trimethylaminuria", correct: false },
        ],
      },
    
    
     {
        question: "A 3-year-old boy presented with global developmental delay and diffuse thinning of scalp hair since 6 months of age. He has a history of generalized seizures and has perioral desquamating lesions. Investigations revealed multiple carboxylase deficiency. What is the treatment of choice?",
        answers: [
          { text: "Thiamine", correct: false },
          { text: "Pyridoxine", correct: false },
          { text: "Biotin", correct: true },
          { text: "Methylcobalamin", correct: false },
        ],
      },
    
    {
        question: "Which of the porphyrias are not autosomal dominant?",
        answers: [
          { text: "Congenital erythropoietic porphyria (CEP)", correct: false },
          { text: "X-linked protoporphyria (XLP)", correct: false },
          { text: "-Aminolevulinic acid dehydratase porphyria (ADP)", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following is also known as plumboporphyria due to its clinical similarity to lead poisoning?",
        answers: [
          { text: "Acute intermittent porphyria (AIP)", correct: false },
          { text: " -Aminolevulinic acid dehydratase porphyria (ALAD)", correct: true },
          { text: "Porphyria cutanea tarda (PCT)", correct: false },
          { text: "Erythropoietic protoporphyria (EPP)", correct: false },
        ],
      },
    
    
     {
        question: "The enzyme deficient in erythropoietic protoporphyria is _",
        answers: [
          { text: "ō- Aminolevulinate synthase 2 (ALAS2)", correct: false },
          { text: "ō -Aminolevulinic acid dehydratase (ALAD)", correct: false },
          { text: "Porphobilinogen deaminase (PBGD)", correct: false },
          { text: "Ferrochelatase (FECH)", correct: true },
        ],
      },
    
    {
        question: "Deficiency of the enzyme porphobilinogen deaminase causes",
        answers: [
          { text: "Porphyria cutanea tarda", correct: false },
          { text: "Acute intermittent porphyria", correct: true },
          { text: "Variegate porphyria", correct: false },
          { text: "X-Linked protoporphyria", correct: false },
        ],
      },
    
    
    {
        question: "A 16-year-old girl was admitted for severe abdominal pain, nausea, vomiting, and diarrhoea. She developed generalised seizures in the hospital for which she was given phenytoin. Her symptoms got worse as she developed muscle weakness which progressed to quadriparesis. Urinary porphobilinogen was found to be high. What is the most likely diagnosis?",
        answers: [
          { text: "Congenital erthyropoietic porphyria", correct: false },
          { text: "Porphyria cutanea tarda", correct: false },
          { text: "Acute intermittent porphyria", correct: true },
          { text: "X-linked protoporphyria", correct: false },
        ],
      },
    
    
     {
        question: "The most common porphyria which manifests in childhood is",
        answers: [
          { text: "Porphyria cutanea tarda", correct: false },
          { text: "Congenital erythropoietic porphyria", correct: false },
          { text: "Erythropoietic protoporphyria", correct: true },
          { text: "Hereditary coproporphyria", correct: false },
        ],
      },
    
    {
        question: "The enzyme deficient in hereditary coproporphyria is __",
        answers: [
          { text: "Coproporphyrinogen oxidase (CPOX)", correct: true },
          { text: "Protoporphyrinogen oxidase (PPOX)", correct: false },
          { text: "Porphobilinogen deaminase (PBGD)", correct: false },
          { text: "Ferrochelatase (FECH)", correct: false },
        ],
      },
    
    
    {
        question: "The inability to degrade sphingomyelin is seen in _",
        answers: [
          { text: "Niemann-Pick disease", correct: true },
          { text: "Tay-Sach disease", correct: false },
          { text: "Fabry's disease", correct: false },
          { text: "Gaucher's disease", correct: false },
        ],
      },
    
    
     {
        question: "Accumulation of ___ takes place in Farber's disease.",
        answers: [
          { text: "Lecithin", correct: false },
          { text: "Ceramide", correct: true },
          { text: "Sphingomyelin", correct: false },
          { text: "Sulfatides", correct: false },
        ],
      },
    
    {
        question: "A male child with coarse facies, macroglossia, thick lips with hepatosplenomegaly presents with copious mucous discharge from the nose. The most probable underlying diagnosis is",
        answers: [
          { text: "Hurler disease", correct: true },
          { text: "Beckwith-Wiedemann syndrome", correct: false },
          { text: "Proteus Syndrome", correct: false },
          { text: "Hypothyroidism", correct: false },
        ],
      },
    
    
    {
        question: "For which of the following conditions is enzyme replacement therapy not available?",
        answers: [
          { text: "Gaucher's disease", correct: false },
          { text: "Pompe disease", correct: false },
          { text: "Sanfilipo disease", correct: true },
          { text: "Fabry's disease", correct: false },
        ],
      },
    
    
     {
        question: "The image below shows the model of a skeletal muscle fiber. Which of the following structures is affected in Duchenne muscular dystrophy?",
        answers: [
          { text: "A", correct: false },
          { text: "B", correct: true },
          { text: "C", correct: false },
          { text: "D", correct: false },
        ],
      },
    
    {
        question: "A 7-year-old boy with progressive muscle weakness and walking difficulties presented with the following finding. What is the probable diagnosis?",
        answers: [
          { text: "Duchenne muscular dystrophy", correct: true },
          { text: "Myotonic dystrophy", correct: false },
          { text: "Spinal muscular atrophy", correct: false },
          { text: "Emery-Dreifuss muscular dystrophy", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is false about Duchenne muscular dystrophy?",
        answers: [
          { text: "Duchenne dystrophy is less severe than Becker's dystrophy", correct: true },
          { text: "X- linked recessive", correct: false },
          { text: "Dilated cardiomyopathy is seen", correct: false },
          { text: "Intellectual impairment is common", correct: false },
        ],
      },
    
    
     {
        question: "A 9-year-old boy with the below feature presents with pain in left shoulder and neck, with a restricted range of motion. There is no history of trauma or any surgery. What is the likely diagnosis?",
        answers: [
          { text: "Facioscapulohumeral dystrophy", correct: true },
          { text: "Long thoracic nerve palsy", correct: false },
          { text: "Klippel-Feil syndrome", correct: false },
          { text: "Becker muscular dystrophy", correct: false },
        ],
      },
    
    {
        question: "All of the following are radiological signs of scurvy except",
        answers: [
          { text: "White line of Frankel", correct: false },
          { text: "Cupping and fraying", correct: true },
          { text: "Ground glass appearance", correct: false },
          { text: "Zone of rarefaction", correct: false },
        ],
      },
    
    
    {
        question: "A 6-month-old infant presents with anemia and hepatosplenomegaly. X-ray imaging done as a part of the skeletal survey showed the following image. What is the diagnosis?",
        answers: [
          { text: "Achondroplasia", correct: false },
          { text: "Scurvy", correct: false },
          { text: "Osteogenesis imperfecta", correct: false },
          { text: "Osteopetrosis", correct: true },
        ],
      },
    
    
     {
        question: "Which of the following is false regarding brittle bone disease?",
        answers: [
          { text: " It is caused by defects in type 2 collagen.", correct: true },
          { text: "Predominantly autosomal-dominant inheritance is seen.", correct: false },
          { text: "Blue sclerae and deafness may be associated.", correct: false },
          { text: "Biphosphonates are useful in the treatment", correct: false },
        ],
      },
    
    {
        question: "An infant presents with hypotonia and hyporeflexia with significant prenatal history of polyhydramnios and decreased fetal movements. What do you suspect?",
        answers: [
          { text: "Spinal muscular atrophy", correct: true },
          { text: "Classical myotonic dystrophy", correct: false },
          { text: "Duchenne muscular dystrophy", correct: false },
          { text: "Emery-Dreifuss syndrome", correct: false },
        ],
      },
    
    
    {
        question: "Pinku, a 9-year-old girl, has difficulty in combing her hair and climbing up stairs since 6 months. On examination, Gower sign is positive and maculopapular rash present over MCP joints. What is the next appropriate investigation to be done?",
        answers: [
          { text: "RA factor", correct: false },
          { text: "Serum creatine kinase", correct: true },
          { text: "Electromyography", correct: false },
          { text: "Muscle biopsy", correct: false },
        ],
      },
    
    
    
     {
        question: "Which of the following is true regarding Gower sign?",
        answers: [
          { text: "Use of hands on thighs to stand up", correct: true },
          { text: "Seen only in Duchenne muscular dystrophy", correct: false },
          { text: "Due to distal muscle weakness", correct: false },
          { text: "All the above", correct: false },
        ],
      },
    
    {
        question: "Lethargy appearing after the 2nd day of neonatal life, in particular, suggests __",
        answers: [
          { text: "Hypoglycemia", correct: false },
          { text: "Infection", correct: true },
          { text: "Inborn error of metabolism", correct: false },
          { text: "Sedation from maternal analgesia", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is not a feature of cephalohematoma?",
        answers: [
          { text: "Swelling of the soft tissues of the scalp", correct: true },
          { text: "Does not cross suture lines", correct: false },
          { text: "Resorbed within 2 weeks to 3 months", correct: false },
          { text: "Appears only several hours after birth", correct: false },
        ],
      },
    
    
     {
        question: "A baby is noted to have a diffuse ecchymotic swelling on the scalp immediately after birth, following vaginal delivery. The most likely diagnosis is __ _ ",
        answers: [
          { text: "Cephalohematoma", correct: false },
          { text: "Caput succedaneum", correct: true },
          { text: "Subgaleal hemorrhage", correct: false },
          { text: "Subdural hematoma", correct: false },
        ],
      },
    
    {
        question: "In which stage of hypoxic ischemic encephalopathy are seizures common?",
        answers: [
          { text: "Stage 1", correct: false },
          { text: "Stage 2", correct: true },
          { text: "Stage 3", correct: false },
          { text: "All of the above", correct: false },
        ],
      },
    
    
    {
        question: "In which stage of hypoxic ischemic encephalopathy is the infant hyper alert with hyperactive tendon reflexes, clonus and normal EEG?",
        answers: [
          { text: "Stage 1", correct: true },
          { text: "Stage 2", correct: false },
          { text: "Stage 3", correct: false },
          { text: "Options A and B", correct: false },
        ],
      },
    
    
     {
        question: "The preferred imaging modality in term neonates with hypoxic ischemic encephalopathy (HIE) is. __ _ ",
        answers: [
          { text: "Ultrasonography", correct: false },
          { text: "Computed tomography", correct: false },
          { text: "Amplitude-integrated electroencephalography", correct: false },
          { text: "Diffusion-weighted magnetic resonance imaging( MRI)", correct: true },
        ],
      },
    
    {
        question: "Which of the following statements is true regarding apnea in the newborn?",
        answers: [
          { text: "Primary apnea originates in the central nervous system as a result of asphyxia.", correct: false },
          { text: "Primary apnea needs ventilator assistance.", correct: false },
          { text: "Secondary apnea responds to stimulation by establishing normal breathing", correct: false },
          { text: "Apnea developing in an infant who has initiated respiratory effort is called secondary apnea", correct: true },
        ],
      },
    
    
    {
        question: "An infant born with shoulder dystocia is detected to have Erb-Duchenne paralysis. The affected cervical nerves are ___",
        answers: [
          { text: "C5", correct: false },
          { text: "C5and C6", correct: true },
          { text: "C6 and C7", correct: false },
          { text: "C7 and C8", correct: false },
        ],
      },
    
    
     {
        question: "Soon after birth, an infant is noted to have paralysis of the left hand with ipsilateral ptosis and miosis. The most likely cause is _____ ",
        answers: [
          { text: "Erb-Duchenne paralysis", correct: false },
          { text: "Phrenic nerve palsy", correct: false },
          { text: "Horner syndrome", correct: false },
          { text: "Klumpke's paralysis associated with Horner syndrome", correct: true },
        ],
      },
    
    {
        question: "A term female infant is born by spontaneous vaginal delivery to a primiparous woman who received 2 doses of meperidine 2 hours before delivery. The baby is apneic. The most important, immediate management is to ___",
        answers: [
          { text: "Obtain a cord blood pH", correct: false },
          { text: "Perform bag-mask ventilation", correct: true },
          { text: "Administer naloxone in the endotracheal tube", correct: false },
          { text: "Begin chest compressions", correct: false },
        ],
      },
    
    
    {
        question: "Successful ventilation is determined by all of the following except. ___",
        answers: [
          { text: "Zero reading of end-tidal C02 measurement", correct: true },
          { text: "Heart rate more than 100 beats/min", correct: false },
          { text: "Symmetric breath sounds", correct: false },
          { text: "Good chest rise", correct: false },
        ],
      },
    
    
    
     {
        question: "An infant was delivered at 39 weeks of gestation through emergency c-section due to fetal distress. Following delivery, the infant was cyanotic and apneic. What is the preferred initial gas for neonatal resuscitation?",
        answers: [
          { text: "100% oxygen", correct: false },
          { text: "Hyperbaric oxygen", correct: false },
          { text: "70% oxygen", correct: false },
          { text: "Room air", correct: true },
        ],
      },
    
    {
        question: "What is the ideal ratio of compressions to ventilation in resuscitation of thenewborn?",
        answers: [
          { text: "30:2", correct: false },
          { text: "5:1", correct: false },
          { text: "3:1", correct: true },
          { text: "2:1", correct: false },
        ],
      },
    
    
    {
        question: "When do you consider administering epinephrine in a neonate during resuscitation?",
        answers: [
          { text: "Heart rate remains at< 60 beats/minute despite effective compressions and ventilations", correct: true },
          { text: "Heart rate remains at < 100 beats/minute despite effective compressions andventilations.", correct: false },
          { text: "Heart rate does not improve after 30 seconds with bag and mask ventilation", correct: false },
          { text: "Infants with severe respiratory depression fail to respond to positive pressure ventilation via bag and mask", correct: false },
        ],
      },
    
    
     {
        question: "Name the procedure by which the airway is secured before the infant is separated from the placenta.",
        answers: [
          { text: "Bilevel airway positive pressure (BIPAP)", correct: false },
          { text: "Ex utero intrapartum treatment procedure (EXIT)", correct: true },
          { text: "Extracorporeal membrane oxygenation (ECMO)", correct: false },
          { text: "Continous positive airway pressure (CPAP)", correct: false },
        ],
      },
    
    {
        question: "Identify the below instrument used in neonatal resuscitation",
        answers: [
          { text: "Laryngeal mask airway", correct: false },
          { text: "Self-inflating bag and mask", correct: true },
          { text: "Laryngoscope", correct: false },
          { text: "Endotracheal tube", correct: false },
        ],
      },
    
    
    {
        question: "True regarding the difference between adult and pediatric resuscitation",
        answers: [
          { text: "Ventricular dysrhythmias are common in children", correct: false },
          { text: "The no flow phase precedes the period of cardiac arrest in children.", correct: false },
          { text: "More ventilation to be given compared to chest compressions in children", correct: false },
          { text: "Dysrhythmias are most often due to respiratory insufficiency in children", correct: true },
        ],
      },
    
    
     {
        question: "A newborn presents with anuria, and further evaluation reveals renal agenesis and pulmonary hypoplasia. There is also a history of oligohydramnios. The most probable diagnosis is __",
        answers: [
          { text: "Potter syndrome", correct: true },
          { text: "Pierre Robin syndrome", correct: false },
          { text: "Downs syndrome", correct: false },
          { text: "CHARGE syndrome", correct: false },
        ],
      },
    
    {
        question: "A newborn has respiratory distress in the delivery room. Nasogastric tube cannot bepassed through the nares. Genital and ear abnormalities are also noted on preliminary examination. Diagnosis is ___ _",
        answers: [
          { text: "Potter syndrome", correct: false },
          { text: "VATER syndrome", correct: false },
          { text: "CHARGE syndrome", correct: true },
          { text: "Pierre-Robbin syndrome", correct: false },
        ],
      },
    
    
    {
        question: "A 15-day-old infant had conjunctivitis, which later developed into respiratory distressand pneumonia. Chest X-ray examination revealed bilateral lung infiltrates. Peripheral smear count showed 14,300/dl (N 43, L 54, E3). Which of the following is the most likely pathogenic organism?",
        answers: [
          { text: "Chlamydia trachomatis", correct: true },
          { text: "Streptococcus pneumonia", correct: false },
          { text: "Neisseria gonorrhoeae", correct: false },
          { text: "Mycoplasma pneumonia", correct: false },
        ],
      },
    
    
     {
        question: "A child presented with the evisceration of bowel loops coming out of a defect in the abdominal wall to the right of the umbilicus. The most probable diagnosis is",
        answers: [
          { text: "Omphalocele", correct: false },
          { text: "Umbilical hem1a", correct: false },
          { text: "Gastrochisis", correct: true },
          { text: "Patent urachus", correct: false },
        ],
      },
    
    {
        question: "Which of the following is the most common bone to fracture in a neonate?",
        answers: [
          { text: "Pelvis", correct: false },
          { text: "Clavicle", correct: true },
          { text: "Scapula", correct: false },
          { text: "Humerus", correct: false },
        ],
      },
    
    
    {
        question: "All of the following are suggestive of pathological jaundice except __",
        answers: [
          { text: "Jaundice appears within first 24 hours after birth", correct: false },
          { text: "Jaundice present at or beyond age 3 weeks", correct: false },
          { text: "Jaundice associated with rise in bilirubin level at a rate of <5 mg/dl/24 hour", correct: true },
          { text: "Jaundice seen in the mid-abdomen and soles", correct: false },
        ],
      },
    
    
    
     {
        question: "A term infant develops jaundice at day 2 of life. It first appeared on the sclera and progressed to the trunk by day 4. It completely disappeared by day 7 following phototherapy. Which of the following statements is false regarding the cause of this pattern of jaundice?",
        answers: [
          { text: "Due to a rise in unconjugated bilirubin.", correct: false },
          { text: "Due to limitation in the conjugation of bilirubin by the immature neonatal liver", correct: false },
          { text: "Due to Rh incompatibility between maternal and fetal red blood cells", correct: true },
          { text: "Due to increased breakdown of fetal red blood cells.", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not a feature of breastfeeding jaundice?",
        answers: [
          { text: "Unconjugated hyperbilirubinemia is seen", correct: false },
          { text: "It occurs in the first week of life", correct: false },
          { text: "It is seen in breastfed infant due to decreased milk intake.", correct: false },
          { text: "Treatment is to withhold breastfeeding.", correct: true },
        ],
      },
    
    
    {
        question: "What is the most common cause of hemolytic disease of the newborn?",
        answers: [
          { text: "Rh incompatibility", correct: false },
          { text: "ABO incompatibility", correct: true },
          { text: "Kell antigen incompatibility", correct: false },
          { text: "Hemolytic diseases due to infections", correct: false },
        ],
      },
    
    
     {
        question: "Which among the following is not a late feature of kernicterus?",
        answers: [
          { text: "Defective upward gaze", correct: false },
          { text: "Sensorineural hearing loss", correct: false },
          { text: "Choreoathetosis", correct: false },
          { text: "Hypotonia", correct: true },
        ],
      },
    
    {
        question: "The most effective wavelength of light for phototherapy in neonatal indirect hyperbilirubinemia ranges from ___ _",
        answers: [
          { text: "370 to 390 nm", correct: false },
          { text: "390 to 420 nm", correct: false },
          { text: "460 to 490 nm", correct: true },
          { text: "410 to 450 nm", correct: false },
        ],
      },
    
    
    {
        question: "Bronze baby syndrome is caused by __",
        answers: [
          { text: "Phototherapy", correct: true },
          { text: "Hemosiderosis", correct: false },
          { text: "Vancomycin", correct: false },
          { text: "Chloramphenicol", correct: false },
        ],
      },
    
    
     {
        question: "A mother noticed yellowish discolouration of her term newborn within the first 6 hours of life. On examination, jaundice extended up to the lower abdomen and thighs. Which of the following drugs can be administered along with phototherapy?",
        answers: [
          { text: "Sn Mesoporphyrin", correct: true },
          { text: "Tolazoline", correct: false },
          { text: "Tromethamine", correct: false },
          { text: "Sucrose", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not true regarding necrotizing enterocolitis?",
        answers: [
          { text: "Proximal part of the ileum is involved most frequently.", correct: true },
          { text: "Pneumatosis intestinalis is seen.", correct: false },
          { text: "It is associated with intestinal ischemia.", correct: false },
          { text: "It is more common in preterm infants", correct: false },
        ],
      },
    
    
    {
        question: "All among the following are clinical features of necrotizing enterocolitis except",
        answers: [
          { text: "Vomiting", correct: false },
          { text: "Abdominal mass", correct: false },
          { text: "Erythema of the abdominal wall", correct: false },
          { text: "Metabolic alkalosis", correct: true },
        ],
      },
    
    
     {
        question: "This is an X-ray of a newborn with necrotising enterocolitis. Identify the stage of necrotizing enterocolitis (NEC) according to Modified Bell's Staging Criteria?",
        answers: [
          { text: "Stage IB of necrotizing enterocolitis", correct: false },
          { text: "Stage IIA of necrotizing enterocolitis", correct: true },
          { text: "Stage IIIA of necrotizing enterocolitis", correct: false },
          { text: "Stage IIIB of necrotizing enterocolitis", correct: false },
        ],
      },
    
    {
        question: "Which vitamin dependency is responsible for neonatal seizures?",
        answers: [
          { text: "Pyridoxine", correct: true },
          { text: "Thiamine", correct: false },
          { text: "Vitamin c", correct: false },
          { text: "Folic acid", correct: false },
        ],
      },
    
    
    {
        question: "Which is the most common cause of seizure in a term neonate?",
        answers: [
          { text: "Hypoglycemia", correct: false },
          { text: "Sepsis", correct: false },
          { text: "Hypoxic ischemic encephalopathy", correct: true },
          { text: "Hypocalcemia", correct: false },
        ],
      },
    
    
    
     {
        question: "The cut-off value for treatment in neonatal hypogylcemia is___",
        answers: [
          { text: "Plasma glucose < 40 mg/dL", correct: false },
          { text: "Plasma glucose < 45 mg/dL", correct: true },
          { text: "Plasma glucose <50 mg/dL", correct: false },
          { text: "Plasma glucose < 55 mg/dL", correct: false },
        ],
      },
    
    {
        question: "Which of these is most commonly seen in an infant of diabetic mother? a) Hyperglycemia b) Hypocalcemia c) Neural tube defect  d) Macrosomia e) Intrauterine growth restriction. ",
        answers: [
          { text: "a, b, c", correct: false },
          { text: " b, c, e", correct: false },
          { text: "a, d, e", correct: false },
          { text: "b , c, d", correct: true },
        ],
      },
    
    
    {
        question: "Consider the following statements about neonatal sepsis : (A) Infants with early-onset sepsis present with respiratory distress and pneumonia; (B) Late-onset sepsis present after 48 hours of life; (C) Neutrophilia is the initial blood finding; and (D) All neonates suspected to have sepsis should have a sepsis screen to corroborate the diagnosis.",
        answers: [
          { text: "Statements A and B true, C and D false", correct: false },
          { text: "Statements A and D true, B and C false", correct: true },
          { text: "Statements A and C true , B and D false", correct: false },
          { text: "Statements B and C true, A and D false", correct: false },
        ],
      },
    
    
     {
        question: "Which among the following is the most common manifestation of late-onset neonatal sepsis?",
        answers: [
          { text: "Meningitis", correct: true },
          { text: "Pneumonia", correct: false },
          { text: "Disseminated intravascular coagulation", correct: false },
          { text: "Shock", correct: false },
        ],
      },
    
    {
        question: "All of the following are components of neonatal sepsis screen except",
        answers: [
          { text: "Immature to total neutrophil ratio", correct: false },
          { text: "C-reactive protein", correct: false },
          { text: "Absolute eosinophil count", correct: true },
          { text: "Micro-erythrocyte sedimentation rate", correct: false },
        ],
      },
    
    
    {
        question: "A 2-day-old neonate was admitted to the NICU after he was observed to have the movements as shown in the clip. His APGAR score was 8 and 9 at 1 and 5 minutes, respectively. He was maintaining normal blood sugar in the first 24 hours. What is the likely diagnosis?",
        answers: [
          { text: "Focal tonic seizure", correct: false },
          { text: "Focal clonic seizure", correct: true },
          { text: "Spasms", correct: false },
          { text: "Subtle seizure", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is not a feature of oligohydramnios?",
        answers: [
          { text: "Amnion nodosum", correct: false },
          { text: "Abruptio placenta", correct: true },
          { text: "Pulmonary hypoplasia", correct: false },
          { text: "Renal agenesis", correct: false },
        ],
      },
    
    {
        question: "A male infant born at 34 weeks of gestation by emergency C-section was found to have only a single umbilical artery following cord clamping. An anomaly in which of the following systems is most likely in this infant?",
        answers: [
          { text: "Renal system", correct: true },
          { text: "Central nervous system", correct: false },
          { text: "Gastro-intestinal system", correct: false },
          { text: "Endocrine system", correct: false },
        ],
      },
    
    
    {
        question: "Intrauterine growth restriction (IUGR) is caused by all of the following except __ .",
        answers: [
          { text: "Renal hematomas", correct: true },
          { text: "Diabetes with vasculopathy", correct: false },
          { text: "Hypertension", correct: false },
          { text: "Sickle cell anemia", correct: false },
        ],
      },
    
    
     {
        question: "Which of the following is not affected in asymmetric intrauterine growth restriction?",
        answers: [
          { text: "Subcutaneous fat", correct: false },
          { text: "Muscle", correct: false },
          { text: "Liver", correct: false },
          { text: "Brain", correct: true },
        ],
      },
    
    {
        question: "The expanded new Ballard score is used to assess ___",
        answers: [
          { text: "Physical maturity", correct: false },
          { text: "Neuromuscular maturity", correct: false },
          { text: "Both of the above", correct: true },
          { text: "None of the above", correct: false },
        ],
      },
    
    
    {
        question: "The lowest and highest score on the expanded New Ballard Score is __ _",
        answers: [
          { text: "0 and 40", correct: false },
          { text: "10 and 50", correct: true },
          { text: "20 and 44", correct: false },
          { text: "10 and 32", correct: false },
        ],
      },
    
    
    
     {
        question: "All of the following are features of prematurity in a neonate except _ _ _",
        answers: [
          { text: "No creases on sole", correct: false },
          { text: "Insignificant breast nodule", correct: false },
          { text: "Thick ear cartilage", correct: true },
          { text: "Empty scrotum", correct: false },
        ],
      },
    
    {
        question: "All of the following are components of the physical criteria for maturity according to the expanded New Ballard score except __",
        answers: [
          { text: "Skin", correct: false },
          { text: "Lanugo hair", correct: false },
          { text: "Palmar surface", correct: true },
          { text: "Breast", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following is a component of the neuromuscular criteria for maturity according to the expanded New Ballard score?",
        answers: [
          { text: "Heel-knee test", correct: false },
          { text: "Finger -nose test", correct: false },
          { text: "Scarf sign", correct: true },
          { text: "Cubital angle", correct: false },
        ],
      },
    
    
     {
        question: "According to the expanded New Ballard score, which of the following criteria can be assigned 5 points?",
        answers: [
          { text: "Square window", correct: false },
          { text: "Lanugo", correct: false },
          { text: "Popliteal angle", correct: true },
          { text: "All of the above", correct: false },
        ],
      },
    
    {
        question: "Intracranial bleeds in premature infants is seen in the __ _",
        answers: [
          { text: "Germinal matrix", correct: true },
          { text: "Corpus callosum", correct: false },
          { text: "Basal ganglia", correct: false },
          { text: "Choroid plexus", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following drugs potentially result in pyloric stenosis in infants?",
        answers: [
          { text: "Erythromycin", correct: true },
          { text: "Gentamicin", correct: false },
          { text: "Chloramphenicol", correct: false },
          { text: "Tetracycline", correct: false },
        ],
      },
    
    
     {
        question: "A 27-year-old woman with hypercholesterolemia on atorvastatin therapy presented for routine follow up. She expresses intent to conceive. She must be asked to stop the drug due to the risk of developing which of the following effects on the fetus?",
        answers: [
          { text: "Cutis laxa syndrome", correct: false },
          { text: "Ebstein anomaly", correct: false },
          { text: "Facial ear anomalies", correct: false },
          { text: "VACTERAL defect", correct: true },
        ],
      },
    
    {
        question: "Post-term infants are those born after __",
        answers: [
          { text: "40 weeks of completed gestation", correct: false },
          { text: "40 weeks and 2 days", correct: false },
          { text: "41 weeks or completed gestation", correct: false },
          { text: "42 weeks of completed gestation", correct: true },
        ],
      },
    
    
    {
        question: "Which of the following is not a complication of post-maturity?",
        answers: [
          { text: "Abruptio placenta", correct: true },
          { text: "Polycythemia", correct: false },
          { text: "Meconium aspiration", correct: false },
          { text: "Persistent pulmonary hypertension", correct: false },
        ],
      },
    
    
     {
        question: "The term large for gestational age (LGA) refers to an infant whose birth weight is above ___ percentile for gestational age.",
        answers: [
          { text: "50th", correct: false },
          { text: "85th", correct: false },
          { text: "90th", correct: true },
          { text: "95th", correct: false },
        ],
      },
    
    {
        question: "A 28-year-old woman at 24 weeks of gestation with monochromic twins presented for routine follow-up. She is suspected to have fetal transfusion syndrome with an uncompensated placental arteriovenous shunt. Which among the following is one of the characteristic changes seen in the donor twin?",
        answers: [
          { text: "Hydrops", correct: false },
          { text: "Plethora", correct: false },
          { text: "Thin-walled arterioles", correct: true },
          { text: "Polycythemia", correct: false },
        ],
      },
    
    
    {
        question: "A male infant was born at 43 weeks of gestation with presumed placental insufficiency by an uncomplicated vaginal delivery. Which of the following physical signs is unlikely to be seen in this infant?",
        answers: [
          { text: "Long nulls", correct: false },
          { text: "Pale skin", correct: false },
          { text: "Alert faces", correct: false },
          { text: "Scanty hair", correct: true },
        ],
      },
    
     {
        question: "Scarf sign in a newborn is used for the assessment of",
        answers: [
          { text: "Muscle mass", correct: false },
          { text: "Tone", correct: true },
          { text: "Renal function", correct: false },
          { text: "Vision", correct: false },
        ],
      },
    
    {
        question: "Which of the following time lines would be included in the perinatal period?",
        answers: [
          { text: "37th week of gestation to 28 days after birth", correct: false },
          { text: "19th week of gestation to 7 days after birth", correct: false },
          { text: "32nd week of gestation to 28 days after birth", correct: false },
          { text: "22nd week of gestation to 7 days after birth", correct: true },
        ],
      },
    
    
    {
        question: "A 5-month-old infant is brought to the OPD for a well-baby check-up. A lesion which was present since birth is noticed as given below. What is the most probable diagnosis?",
        answers: [
          { text: "Dermal melanocytosis", correct: true },
          { text: "Salmon patch", correct: false },
          { text: "Neonatal pustular Melanosis", correct: false },
          { text: "Harlequin color change", correct: false },
        ],
      },
    
    
     {
        question: "The neonatal period is defined as the first __ days after birth.",
        answers: [
          { text: "21", correct: false },
          { text: "28", correct: true },
          { text: "30", correct: false },
          { text: "40", correct: false },
        ],
      },
    
    {
        question: "A very low birth weight (VLBW) baby is one whose birth weight is less than ___ kg",
        answers: [
          { text: "1", correct: false },
          { text: " 1.5", correct: true },
          { text: "2", correct: false },
          { text: "2.5", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following should be investigated in a 5-day-old baby?",
        answers: [
          { text: "Conjunctival hemorrhage", correct: false },
          { text: "Buphthalmos", correct: true },
          { text: "Erythema toxicum", correct: false },
          { text: "Mongolian spots", correct: false },
        ],
      },
    
    
     {
        question: "A neonate was found to have a white pupillary reflex on routine examination of the eye. Which among the following can be ruled out as the cause of this finding?",
        answers: [
          { text: "congenital cataract", correct: false },
          { text: "Persistent hyperplastic primary Vitreous", correct: false },
          { text: "Retinopathy of prematurity", correct: false },
          { text: "Congenital glaucoma", correct: true },
        ],
      },
    
    {
        question: "A 5-day-old infant is seen with this transient rash. On microscopic examination, these papular lesions on an erythematous base will reveal. __ _",
        answers: [
          { text: "Eosinophils", correct: true },
          { text: "Neutrophils", correct: false },
          { text: "Both a and b", correct: false },
          { text: "None of ten above", correct: false },
        ],
      },
    
    
    {
        question: "A fetus with intrauterine growth restriction was born prematurely with jaundice, hepatosplenomegaly, microcephaly and diffuse petechiae at birth. A brain CT was done which revealed periventricular calcifications. What is the best method for the diagnosis of the etiological agent?",
        answers: [
          { text: "Urine examination", correct: true },
          { text: "Liver biopsy", correct: false },
          { text: "Blood examination", correct: false },
          { text: "CSF examination", correct: false },
        ],
      },
    
    
     {
        question: "A female infant born at 38 weeks of gestation by C-section was found to have a wide anterior fontanelle on examination following birth. Which of the following congenital anomalies is the least likely?",
        answers: [
          { text: "Achondroplasia", correct: false },
          { text: "Hydrocephaly", correct: false },
          { text: "Trisomy 21", correct: false },
          { text: "Craniosynostosis", correct: true },
        ],
      },
    
    {
        question: "Asymmetric tonic neck reflex (ATNR) disappears at __",
        answers: [
          { text: "6 months", correct: true },
          { text: " 5 months", correct: false },
          { text: "9 months", correct: false },
          { text: "8 months", correct: false },
        ],
      },
    
    
    {
        question: "In which of the following conditions is the brisk Moro reflex seen?",
        answers: [
          { text: "Kernicterus", correct: false },
          { text: "Stage III hypoxic ischemic encephalopathy (HIE)", correct: false },
          { text: "Hypoglycemia", correct: true },
          { text: "Erg’s palsy", correct: false },
        ],
      },
    
    
    
     {
        question: "Parachute reflex disappears ___",
        answers: [
          { text: "at 3 months", correct: false },
          { text: "at 6 months", correct: false },
          { text: "at birth and reappears at 9 months", correct: false },
          { text: "Never", correct: true },
        ],
      },
    
    {
        question: "All of the following are components of the Apgar score except _ _",
        answers: [
          { text: "Color", correct: false },
          { text: "Heart rate", correct: false },
          { text: "Respiratory rate", correct: true },
          { text: "Muscle tone", correct: false },
        ],
      },
    
    
    {
        question: "A baby assessed at 5 minutes after birth is found to be blue with irregular gasping respiration. Heart rate (HR) is 60 beats/min, and a grimace is seen with some flexion of extremities. The Apgar score for this newborn is __ _",
        answers: [
          { text: "0", correct: false },
          { text: "2", correct: false },
          { text: "3", correct: false },
          { text: "4", correct: true },
        ],
      },
    
    
     {
        question: "Normal APGAR score in a neonate with acidosis is associated with _ _ _ .",
        answers: [
          { text: "Spinal Cord trauma", correct: false },
          { text: "Choanal Atresia", correct: false },
          { text: "Diaphragmatic hernia", correct: false },
          { text: "High fetal catecholamine levels", correct: true },
        ],
      },
    
    {
        question: "What is the body temperature range to categorize a neonate as having cold stress?",
        answers: [
          { text: "35.4-36.0 C", correct: false },
          { text: "33.4-34.0 C", correct: false },
          { text: "34 .4-35.4 c", correct: false },
          { text: "36.0-36.4 C", correct: true },
        ],
      },
    
    
    {
        question: "All of the following can occur in a normal neonate for heat regulation except __ _",
        answers: [
          { text: "Shivering", correct: true },
          { text: "Breakdown of brown fat with noradrenaline secretion", correct: false },
          { text: "Universal flexion like a fetus", correct: false },
          { text: "Cutaneous vasoconstnction", correct: false },
        ],
      },
    
    
     {
        question: "All of the following are recommendations of the Baby-Friendly Hospital Initiative except __",
        answers: [
          { text: "Initiate breastfeeding as soon as possible", correct: false },
          { text: "Encourage 4 hourly breastfeeding", correct: true },
          { text: "Rooming-in", correct: false },
          { text: "Counsel mothers on use and risks of pacifiers and feeding bottles", correct: false },
        ],
      },
    
    {
        question: "Post-neonatal mortality refers to ___ .",
        answers: [
          { text: "Deaths between 28 days and 1 yr of  life", correct: true },
          { text: "Deaths within the first 7 days of life", correct: false },
          { text: "Deaths between 7 days and 28 days of life", correct: false },
          { text: "Deaths within the first 3 months of life", correct: false },
        ],
      },
    
    
    {
        question: "Newborn infants are administered vitamin K at birth at a dose of ___ .",
        answers: [
          { text: "0.5 - 1 mg IM", correct: true },
          { text: "5 - 10 mg IV", correct: false },
          { text: "1-5 mg IV", correct: false },
          { text: "0 1 - 0.5 mg IM", correct: false },
        ],
      },
    
    
     {
        question: "Antenatal screening test done in the maternal serum is __",
        answers: [
          { text: "Percutaneous umbilical blood sampling", correct: false },
          { text: "Cell free fetal DNA testing", correct: true },
          { text: "Chorionic villus sampling", correct: false },
          { text: "Amniocentesis", correct: false },
        ],
      },
    
    {
        question: "After the delivery of an infant of a diabetic mother, blood glucose of the infant was 60mg/dl. Which other investigations would you expect the clinician to do?",
        answers: [
          { text: "Serum potassium", correct: false },
          { text: "CBC", correct: false },
          { text: "Serum chloride", correct: false },
          { text: "Serum calcium", correct: true },
        ],
      },
    
    
    {
        question: "Choose the correct order of suctioning during neonatal resuscitation.",
        answers: [
          { text: "Mouth-nose", correct: true },
          { text: "Nose-mouth", correct: false },
          { text: "Mouth-nose-esophagus", correct: false },
          { text: "Trachea-nose-mouth", correct: false },
        ],
      },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();