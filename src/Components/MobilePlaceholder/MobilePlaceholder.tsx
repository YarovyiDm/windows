import { MobilePlaceholderWrapper } from "./MobilePlaceholder.styled";

const MobilePlaceholder = () => {
    return (
        <MobilePlaceholderWrapper>
            <div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
                <h2>Please open from desktop</h2>
                <p style={{ opacity: 0.7 }}>
                    Mobile version is coming soon
                </p>
            </div>
        </MobilePlaceholderWrapper>
    );
};

export default MobilePlaceholder;