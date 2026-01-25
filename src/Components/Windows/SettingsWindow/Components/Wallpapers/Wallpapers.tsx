import { WALLPAPERS } from "Constants/System";
import "rc-slider/assets/index.css";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectWallpaper } from "Store/selectors/System";
import { changeWallpaper } from "Store/slices/System";
import { BlockBasic } from "Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { WallpapersStyled } from "Components/Windows/SettingsWindow/Components/Wallpapers/Wallpapers.styled";

const Wallpapers = () => {
    const dispatch = useAppDispatch();
    const currentWallpaper = useAppSelector(selectWallpaper);

    const onWallpaperChange = (newWallpaper: string) => {
        dispatch(changeWallpaper(newWallpaper));
    };

    return (
        <BlockBasic title='Wallpapers'>
            {WALLPAPERS.map(wallpaper => {
                return (
                    <WallpapersStyled
                        isSelected={currentWallpaper === wallpaper}
                        style={{ backgroundImage: `url(${wallpaper})` }}
                        onClick={() => onWallpaperChange(wallpaper)}
                    />
                );
            })}
        </BlockBasic>
    );
};

export default Wallpapers;