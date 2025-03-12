import { FC } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Bounded } from '@/components/Bounded';
import { PrismicNextLink } from '@prismicio/next';
import { Heading } from '@/components/Heading';

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texure bg-brand-gray"
    >
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicRichText field={slice.primary.heading} />
      </Heading>
      <div className="text-center ~mb-6/10">
        <PrismicRichText field={slice.primary.body} />
      </div>
      {slice.primary.product.map((item, index) => (
        <PrismicNextLink key={index} field={item.skateboard}>
          Link
        </PrismicNextLink>
      ))}
    </Bounded>
  );
};

export default ProductGrid;
