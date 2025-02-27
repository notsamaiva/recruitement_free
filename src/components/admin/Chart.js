import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrer les composants nécessaires pour Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Données avec plusieurs lignes
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Pages vues',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: 'Visiteurs uniques',
      data: [35, 49, 60, 71, 46, 45, 30],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
    },
    {
      label: 'Conversions',
      data: [25, 39, 50, 41, 36, 35, 20],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

// Options de configuration du graphique
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: 'Poppins', // Police Poppins pour la légende
        },
      },
    },
    title: {
      display: true,
      text: 'Statistiques de trafic sur 7 mois',
      font: {
        family: 'Poppins', // Police Poppins pour le titre
        size: 18,
        weight: 'bold',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: 'Poppins', // Police Poppins pour les labels d'axes
        },
      },
    },
    y: {
      ticks: {
        font: {
          family: 'Poppins', // Police Poppins pour les labels d'axes
        },
      },
    },
  },
};

function LineChart() {
  return <Line data={data} options={options} />;
}

export default LineChart;
