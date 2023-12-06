import HeaderCrm from './components/headerCrm';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HeaderCrm />
            {children}
        </div>
    );
};

export default RootLayout;
