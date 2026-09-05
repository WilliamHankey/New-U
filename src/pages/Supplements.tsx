import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSanity } from '../context/SanityContext';
import { resolveImageUrl, Supplement } from '@/lib/sanity';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, AlertCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const statusLabel: Record<string, string> = {
  inStock: 'In Stock',
  comingSoon: 'Coming Soon',
  outOfStock: 'Out of Stock',
};

const SupplementCard = ({
  supplement,
  index,
  phone,
}: {
  supplement: Supplement;
  index: number;
  phone: string;
}) => {
  const status = supplement.status || 'inStock';
  const canBuy = status === 'inStock';
  const digits = phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${digits}?text=${encodeURIComponent(
    `Hi! I'd like to order the ${supplement.title || ''}${
      supplement.price ? ` (${supplement.price})` : ''
    } from New-U.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={resolveImageUrl(supplement)}
          alt={supplement.title || 'Supplement'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={cn(
            "absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wide",
            status === 'inStock' && "bg-newu-green text-white",
            status === 'comingSoon' && "bg-amber-400 text-white",
            status === 'outOfStock' && "bg-gray-400 text-white"
          )}
        >
          {statusLabel[status]}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold group-hover:text-newu-green transition-colors duration-300">
            {supplement.title}
          </h3>
          {supplement.price && (
            <span className="text-newu-green font-bold text-lg ml-3 whitespace-nowrap">
              {supplement.price}
            </span>
          )}
        </div>
        {supplement.description && (
          <p className="text-gray-600 text-sm mb-4">{supplement.description}</p>
        )}
        {supplement.benefits && supplement.benefits.length > 0 && (
          <ul className="space-y-2 mb-6">
            {supplement.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <Check className="h-4 w-4 text-newu-green mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="px-6 pb-6 mt-auto">
        {canBuy ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-newu-green hover:bg-newu-green-dark text-white py-2.5 px-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Buy Now
          </a>
        ) : (
          <button
            disabled
            className={cn(
              "flex items-center justify-center w-full py-2.5 px-4 rounded-md font-medium cursor-not-allowed",
              status === 'comingSoon' && "bg-amber-100 text-amber-700",
              status === 'outOfStock' && "bg-gray-100 text-gray-500"
            )}
          >
            {status === 'comingSoon' ? (
              <>
                <Clock className="h-4 w-4 mr-2" />
                Coming Soon
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4 mr-2" />
                Out of Stock
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Supplements = () => {
  const { supplements, settings } = useSanity();

  const sortedSupplements = [...supplements].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-newu-green uppercase tracking-wider">
                  Nutrient Supplements
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  Supplements for Your Wellness Journey
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Support your health from the inside out with our range of high-quality
                  nutrient supplements, carefully selected to complement your wellness and
                  beauty treatments.
                </p>
              </motion.div>
            </div>

            {sortedSupplements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedSupplements.map((supplement, index) => (
                  <SupplementCard
                    key={supplement._id}
                    supplement={supplement}
                    index={index}
                    phone={settings?.phone || '(27) 71-952-9055'}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                No supplements yet. Add supplements in the Sanity Studio.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Supplements;