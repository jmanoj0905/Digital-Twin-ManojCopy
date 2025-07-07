import {
  mobile,
  backend,
  creator,
  web,
  heart,
  diabetes,
  mri,
  ctscan,
  ecg,
  heartbeat,
} from "../assets";

export const mainSystem = "Bio Twin";
export const heartSystem = "Heart Disease Prediction Model";
export const diabetesSystem = "Diabetes Disease Prediction Model";
export const mriSystem = "MRI Analysis Model";

export const mainOverview = `Bio Twin based on predictive modeling Analysis predicts the disease of the
user on the basis of the symptoms that the user provides as input to the system. The system
analyzes the symptoms provided by the user as input and gives the probability of the given disease
as an output. Following Cards outline the working process of the the prediction!`;

export const heartOverview = "Our Heart Disease Prediction model uses advanced machine learning algorithms to analyze various health parameters and predict the likelihood of heart disease. It considers factors like age, blood pressure, cholesterol levels, and other vital signs to provide accurate risk assessment.";

export const diabetesOverview = "The Diabetes Prediction model employs sophisticated machine learning techniques to evaluate multiple health indicators and predict the probability of diabetes. It analyzes factors such as glucose levels, BMI, age, and other relevant health metrics to deliver precise risk evaluation.";

export const mriOverview = "Our MRI Analysis model utilizes deep learning algorithms to analyze MRI scans and detect potential abnormalities. It can identify various conditions including brain tumors, neurological disorders, and other structural anomalies with high accuracy.";

export const ctscanOverview = "The CT Scan Analysis model leverages advanced AI techniques to examine CT scan images and identify potential health issues. It can detect various conditions including lung diseases, bone fractures, and internal organ abnormalities with remarkable precision.";

export const ecgOverview = "Our ECG Analysis model uses machine learning to interpret electrocardiogram readings and identify cardiac abnormalities. It can detect various heart conditions including arrhythmias, myocardial infarctions, and other cardiac disorders with high accuracy.";

export const heartbeatOverview = "The Heartbeat Analysis model employs sophisticated algorithms to analyze heart rate patterns and identify potential cardiac issues. It can detect irregularities in heart rhythm, potential arrhythmias, and other heart-related conditions through continuous monitoring.";

export const models = [
  {
    name: "MRI Analysis",
    description: mriOverview,
    tags: [
      {
        name: "mri",
        color: "blue-text-gradient",
      },
      {
        name: "prediction",
        color: "green-text-gradient",
      },
      {
        name: "deep learning",
        color: "pink-text-gradient",
      },
    ],
    image: mri,
    navigate: "mri",
  },
  {
    name: "CT Scan Analysis",
    description: ctscanOverview,
    tags: [
      {
        name: "ctscan",
        color: "blue-text-gradient",
      },
      {
        name: "prediction",
        color: "green-text-gradient",
      },
      {
        name: "ai analysis",
        color: "pink-text-gradient",
      },
    ],
    image: ctscan,
    navigate: "ctscan",
  },
  {
    name: "ECG Analysis",
    description: ecgOverview,
    tags: [
      {
        name: "ecg",
        color: "blue-text-gradient",
      },
      {
        name: "prediction",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: ecg,
    navigate: "ecg",
  },
  {
    name: "Heartbeat Analysis",
    description: heartbeatOverview,
    tags: [
      {
        name: "heartbeat",
        color: "blue-text-gradient",
      },
      {
        name: "prediction",
        color: "green-text-gradient",
      },
      {
        name: "pattern analysis",
        color: "pink-text-gradient",
      },
    ],
    image: heartbeat,
    navigate: "heartbeat",
  },
];

export const services = [
  {
    title: "Model Selection",
    icon: mobile,
  },
  {
    title: "Form Submission",
    icon: backend,
  },
  {
    title: "Results",
    icon: creator,
  },
];

export const modelSelection = "Select the model you want to use for prediction. You can select from the following models:";

export const main_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "model",
    title: "Models",
  },
  {
    id: "signout",
    title: "Sign Out",
  },
];

export const heart_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "form",
    title: "Form",
  },
  {
    id: "result",
    title: "Result",
  },
  {
    id: "signout",
    title: "Sign Out",
  },
];

export const diabetes_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "form",
    title: "Form",
  },
  {
    id: "result",
    title: "Result",
  },
  {
    id: "signout",
    title: "Sign Out",
  },
];

export const mri_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "form",
    title: "Form",
  },
  {
    id: "result",
    title: "Result",
  },
];
