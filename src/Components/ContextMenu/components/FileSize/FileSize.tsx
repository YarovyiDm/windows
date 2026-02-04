import { useLanguage } from "Hooks";
import { FileSizeProps } from "Components/ContextMenu/components/FileSize/FileSize.types";
import { DESKTOP_FILE_SIZE_UNIT } from "Constants/Desktop";
import {
    HotKeys,
    IconWrapper,
    SizeIcon,
    SizeSelected,
    SizeTitle,
    SubItemTitle,
    SubMenuItemMain,
    SubMenuWrapper,
} from "../../ContextMenu.styled";

const FileSize = ({
    selectedSize,
    onDesktopFileSizeChange,
}: FileSizeProps) => {
    const { translate } = useLanguage();

    return (
        <SubMenuWrapper className='submenu'>
            {DESKTOP_FILE_SIZE_UNIT.map(
                ({ size, name, iconName, hotKeys }) => {
                    const isSizeSelected =
                        size.height === selectedSize.height &&
                        size.width === selectedSize.width;

                    return (
                        <SubMenuItemMain
                            key={name}
                            onClick={() =>
                                onDesktopFileSizeChange({
                                    width: size.width,
                                    height: size.height,
                                })
                            }
                        >
                            <SubItemTitle>
                                <IconWrapper>
                                    <SizeIcon
                                        name={iconName}
                                    />
                                </IconWrapper>
                                <SizeTitle>
                                    {translate(name)}
                                </SizeTitle>
                            </SubItemTitle>
                            <HotKeys>
                                {hotKeys}
                            </HotKeys>
                            {isSizeSelected && (
                                <SizeSelected />
                            )}
                        </SubMenuItemMain>
                    );
                },
            )}
        </SubMenuWrapper>
    );
};

export default FileSize;