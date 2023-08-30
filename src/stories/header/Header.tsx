import './header.css';

interface HeaderProps {
  title?: string;
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  title = 'NewsAggregator',
  label,
  ...props
}: HeaderProps) => {
  return (
    <header>
      <div className="flex justify-between items-center w-full
       text-white bg-primary py-4 px-5 drop-shadow-lg">
        <p>
          {title}
        </p>
      </div>
    </header>
    
  );
};
