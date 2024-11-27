export function getPortfolioData() {
  return {
    profile: {
      name: 'Santiago Murgueitio',
      title: 'Data and Artificial Intelligence Engineer',
      description: 'Passionate about transforming data into actionable insights and building ML solutions.'
    },
    skills: [
      {
        category: 'Programming Languages',
        items: ['Python', 'SQL', 'JavaScript']
      },
      {
        category: 'ML & AI solutions',
        items: ['PyTorch', 'Scikit-learn', 'OpenAI API', 'Bert', 'Whisper']
      },
      {
        category: 'Data Analysis',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly']
      },
      {
        category: 'General Tools',
        items: ['Serverless Tools (Cloud Run & Cloud Functions)', 'Google Workflow', 'Vertex AI', 'Docker', 'Git & GitHub']
      }
    ],
    projects: [
      {
        title: 'Sentiment Analysis for insurance selling',
        description: 'Developed an end-to-end solution to analyze customer service calls in the insurance domain. The pipeline included Whisper for call transcription, a GPT Assistant to identify participants, and a fine-tuned BERT model for sentiment analysis. Insights were used to optimize sales by identifying sentiment patterns and improving agent performance. Deployed on Google Cloud Run and integrated with Power BI for visualizations.',
        technologies: ['Python', 'PyTorch', 'Whisper', 'BERT', 'GPT Assistant', 'Google Cloud Run' ]
      },
      {
        title: 'Airbnbs: Data Pipeline',
        description: 'Designed and implemented an ETL process to extract, transform, and load data into a Data Warehouse (DWH). Streamed data through a Kafka broker to Power BI for real-time visualizations, orchestrated with Apache Airflow.',
        technologies: ["Python", "Apache Kafka", "Power BI", "Apache Airflow", "Data Warehouse"]
      },
      {
        title: "Understanding Biodiversity: Hyperion's Web Solution",
        description: "As part of the Hyperion team, we developed a web platform for the Datathon Pacífico 2024 to maximize the impact of available data. Our goal was to help people truly understand what it means to be one of the most biodiverse countries in the world. The platform features user-friendly visualizations and a semantic search engine, enabling users unfamiliar with scientific names or complex terms to perform flexible searches and discover species that match their queries.",
        technologies: ["Python", "Semantic Search", "Data Visualization", "Web Development", "Datathon"]
      }
      
    ]
  };
}