import React from 'react';
import * as s from '@/common/loader/styles';
import { AppStatusEnum } from '@/types/appStatus.enum';
import { RootState, useAppSelector } from '@/redux/store';

const Loader = ({ color }: { color?: string }) => (
	<s.RingLoader>
		<s.DivLoader1 color={color} />
		<s.DivLoader2 color={color} />
		<s.DivLoader3 color={color} />
	</s.RingLoader>
);

export const FullPageLoader = () => {
	return (
		<s.FullPageLoaderContainer>
			<Loader color="black" />
		</s.FullPageLoaderContainer>
	);
};

const LoaderWrapper: React.FC<{ children?: React.ReactNode }> = ({
	children
}) => {
	const { catalog } = useAppSelector((state: RootState) => state);
	return catalog.status === AppStatusEnum.LOADING ? (
		<FullPageLoader />
	) : (
		<>{children}</>
	);
};

export default LoaderWrapper;
