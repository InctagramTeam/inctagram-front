module.exports = componentName => `Name;
import { memo } from 'react';

type Props {
    className?: string;
}

export const ${componentName} = memo((props: Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div>
           
        </div>
    );
});`
