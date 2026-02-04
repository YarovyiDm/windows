import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DateTimeDisplay from "Components/DateTimeDisplay/DateTimeDisplay";
import Icon from "Components/Icon/Icon";
import { SYSTEM_PASSWORD } from 'Constants/System';
import { useAppDispatch } from "Store/index";
import { toggleWindowsUnlock, updateSystemScenario } from "Store/slices/System";
import {
    AvatarWrapper,
    DateTimeContainer,
    InputWrapper,
    LockScreenWrapper,
    LoginWrapper,
    TimeWrapper,
    UserNameStyled,
    IconWrapper,
} from "Containers/Screens/LockScreen/LockScreen.styled";
import { ICONS } from "Constants/Icons";
import { KEY_CODES } from "Constants/KeyCodes";
import { DOM_EVENTS } from "Constants/Events";

type FormValues = {
    password: string;
};

const LockScreen = () => {
    const dispatch = useAppDispatch();
    const [isLoginScreenShow, setIsLoginScreenShow] = useState(false);

    const {
        control,
        handleSubmit,
        clearErrors,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: { password: "" },
    });

    const passwordValue = watch("password");

    const login: SubmitHandler<FormValues> = ({ password }) => {
        if (password.trim() === SYSTEM_PASSWORD) {
            dispatch(toggleWindowsUnlock(true));
            dispatch(updateSystemScenario(null));
            return;
        }
    };

    const onLoginScreenChange = (e: KeyboardEvent) => {
        setIsLoginScreenShow(true);

        if (e.key === KEY_CODES.ENTER) {
            handleSubmit(login)();
        }
    };

    useEffect(() => {
        document.addEventListener(DOM_EVENTS.KEY_DOWN, onLoginScreenChange as EventListener);

        return () => {
            document.removeEventListener(DOM_EVENTS.KEY_DOWN, onLoginScreenChange as EventListener);
        };
    }, [passwordValue]);

    return (
        <LockScreenWrapper
            isBlur={isLoginScreenShow}
            sx={{
                alignItems: isLoginScreenShow ? "flex-start" : "flex-end",
                justifyContent: isLoginScreenShow ? "center" : "none",
            }}
            onClick={() => setIsLoginScreenShow(true)}
        >
            {!isLoginScreenShow && (
                <DateTimeDisplay Container={DateTimeContainer} TimeWrapper={TimeWrapper} />
            )}

            {isLoginScreenShow && (
                <LoginWrapper>
                    <AvatarWrapper>
                        <Icon name={ICONS.USER} />
                    </AvatarWrapper>
                    <UserNameStyled>Yarovyi</UserNameStyled>

                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: "Password is required",
                            validate: (value) => value === SYSTEM_PASSWORD || "Password is incorrect",
                        }}
                        render={({ field }) => (
                            <InputWrapper isError={!!errors.password}>
                                <input
                                    {...field}
                                    placeholder='Password is: 1111'
                                    autoFocus={isLoginScreenShow}
                                    onFocus={() => clearErrors("password")}
                                />
                                <IconWrapper onClick={handleSubmit(login)}>
                                    <Icon name={ICONS.FULL_ARROW} />
                                </IconWrapper>
                            </InputWrapper>
                        )}
                    />
                </LoginWrapper>
            )}
        </LockScreenWrapper>
    );
};

export default LockScreen;
