import { motion } from 'framer-motion';
import { cardVariants } from '@/framer-motion/cardVariants';
import { Article } from '@/types/article.interface';
import ArticleCard from './ArticleCard';
import SectionTitle from '../Reusables/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '@/services';
import '../../assets/sass/sections-common-style.scss';
import '../../assets/sass/dynamic-section.scss';

export default function ArticleSection() {
  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });

  return (
    <section className="article-section dynamic-section">
      <div className="content">
        <SectionTitle title="Mes derniers articles" />
        <div className="dynamic-cards-container">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="project-card"
            >
              <ArticleCard key={article.id} article={article} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
