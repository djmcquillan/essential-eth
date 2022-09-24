import { Contract as EthersContract } from '@ethersproject/contracts';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import type { TinyBig } from '../../..';
import { JsonRpcProvider } from '../../../index';
import { rpcUrls } from '../../../providers/test/rpc-urls';
import { Contract as EssentialEthContract } from '../../Contract';
import { abi } from './crv-abi';

// The JSONABI
const JSONABI = abi;

const rpcURL = rpcUrls.mainnet;
const ethersProvider = new StaticJsonRpcProvider(rpcURL);
const essentialEthProvider = new JsonRpcProvider(rpcURL);

// https://etherscan.io/address/0x575CCD8e2D300e2377B43478339E364000318E2c
const contractAddress = '0x575CCD8e2D300e2377B43478339E364000318E2c';

const ethersContract = new EthersContract(
  contractAddress,
  JSONABI as any,
  ethersProvider,
);
const essentialEthContract = new EssentialEthContract(
  contractAddress,
  JSONABI,
  essentialEthProvider,
);
describe('cRV contract', () => {
  const address = '0xf8cd644baf494d13406187cf8628754dca0a10c2';
  it('should fetch "uint256" balanceOf', async () => {
    const [ethersBalanceOf, essentialEthBalanceOf] = await Promise.all([
      ethersContract.balanceOf(address, {
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.balanceOf(address, {
        gasLimit: 40955,
      }) as TinyBig,
    ]);
    expect(ethersBalanceOf.toString()).toBe(essentialEthBalanceOf.toString());
  });

  it('should fetch "uint256" total_claimed', async () => {
    const [ethersTotalClaimed, essentialEthTotalClaimed] = await Promise.all([
      ethersContract.total_claimed(address, {}) as TinyBig,
      essentialEthContract.total_claimed(address, {}) as TinyBig,
    ]);
    expect(ethersTotalClaimed.toString()).toBe(
      essentialEthTotalClaimed.toString(),
    );
    expect(ethersTotalClaimed.toNumber()).toBe(
      essentialEthTotalClaimed.toNumber(),
    );
  });

  it('should fetch "uint256" vestedSupply', async () => {
    const [ethersVestedSupply, essentialEthvestedSupply] = await Promise.all([
      // ethersContract.vestedSupply() as TinyBig,
      // essentialEthContract.vestedSupply() as TinyBig,
      ethersContract.vestedSupply({
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.vestedSupply({
        gasLimit: 40955,
      }) as TinyBig,
    ]);

    expect(ethersVestedSupply.toString()).toBe(
      essentialEthvestedSupply.toString(),
    );
  });

  it('should fetch "uint256" lockedSupply', async () => {
    const [ethersLockedSupply, essentialEthLockedSupply] = await Promise.all([
      // ethersContract.lockedSupply() as TinyBig,
      // essentialEthContract.lockedSupply() as TinyBig,
      ethersContract.lockedSupply({
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.lockedSupply({
        gasLimit: 40955,
      }) as TinyBig,
    ]);

    expect(ethersLockedSupply.toString()).toBe(
      essentialEthLockedSupply.toString(),
    );
  });

  it('should fetch "uint256" vestedOf', async () => {
    const [ethersVestedOf, essentialEthVestedOf] = await Promise.all([
      ethersContract.vestedOf(address, {
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.vestedOf(address, {
        gasLimit: 40955,
      }) as TinyBig,
    ]);
    expect(ethersVestedOf.toString()).toBe(essentialEthVestedOf.toString());
  });

  it('should fetch "uint256" lockedOf', async () => {
    const [ethersLockedOf, essentialEthLockedOf] = await Promise.all([
      ethersContract.lockedOf(address, {
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.lockedOf(address, {
        gasLimit: 40955,
      }) as TinyBig,
    ]);
    expect(ethersLockedOf.toString()).toBe(essentialEthLockedOf.toString());
  });

  it('should fetch "address" token', async () => {
    const [ethersToken, essentialEthToken] = await Promise.all([
      ethersContract.token({
        gasLimit: 40955,
      }) as string,
      essentialEthContract.token({
        gasLimit: 40955,
      }) as string,
    ]);

    expect(ethersToken).toBe(essentialEthToken);
  });

  it('should fetch "uint256" start_time', async () => {
    const [ethersStartTime, essentialEthStartTime] = await Promise.all([
      ethersContract.start_time({
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.start_time({
        gasLimit: 40955,
      }) as TinyBig,
    ]);
    expect(ethersStartTime.toString()).toBe(essentialEthStartTime.toString());
  });

  it('should fetch "uint256" end_time', async () => {
    const [ethersEndTime, essentialEthEndTime] = await Promise.all([
      ethersContract.end_time({
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.end_time({
        gasLimit: 40955,
      }) as TinyBig,
    ]);
    expect(ethersEndTime.toString()).toBe(essentialEthEndTime.toString());
    expect(ethersEndTime.toNumber()).toBe(essentialEthEndTime.toNumber());
  });

  it('should fetch "uint256" initial_locked', async () => {
    const [ethersInitialLocked, essentialEthInitialLocked] = await Promise.all([
      ethersContract.initial_locked(address, {}) as TinyBig,
      essentialEthContract.initial_locked(address, {}) as TinyBig,
    ]);
    expect(ethersInitialLocked.toString()).toBe(
      essentialEthInitialLocked.toString(),
    );
  });

  it('should fetch "uint256" initial_locked_supply', async () => {
    const [ethersInitialLockedSupply, essentialEthInitialLockedSupply] =
      await Promise.all([
        ethersContract.initial_locked_supply({
          gasLimit: 40955,
        }) as TinyBig,
        essentialEthContract.initial_locked_supply({
          gasLimit: 40955,
        }) as TinyBig,
      ]);
    expect(ethersInitialLockedSupply.toString()).toBe(
      essentialEthInitialLockedSupply.toString(),
    );
  });

  it('should fetch "uint256" unallocated_supply', async () => {
    const [ethersUnallocatedSupply, essentialEthUnallocatedSupply] =
      await Promise.all([
        ethersContract.unallocated_supply({
          gasLimit: 40955,
        }) as TinyBig,
        essentialEthContract.unallocated_supply({
          gasLimit: 40955,
        }) as TinyBig,
      ]);
    expect(ethersUnallocatedSupply.toString()).toBe(
      essentialEthUnallocatedSupply.toString(),
    );
  });

  it('should fetch "bool" can_disable', async () => {
    const [ethersCanDisable, essentialEthCanDisable] = await Promise.all([
      ethersContract.can_disable({
        gasLimit: 40955,
      }) as boolean,
      essentialEthContract.can_disable({
        gasLimit: 40955,
      }) as boolean,
    ]);
    expect(ethersCanDisable).toBe(essentialEthCanDisable);
  });

  it('should fetch "uint256" disabled_at', async () => {
    const [ethersDisabledAt, essentialEthDisabledAt] = await Promise.all([
      ethersContract.disabled_at(address, {
        gasLimit: 40955,
      }) as TinyBig,
      essentialEthContract.disabled_at(address, {
        gasLimit: 40955,
      }) as TinyBig,
    ]);
    expect(ethersDisabledAt.toString()).toBe(essentialEthDisabledAt.toString());
  });

  it('should fetch "address" admin', async () => {
    const [ethersAdmin, essentialEthAdmin] = await Promise.all([
      ethersContract.admin({
        gasLimit: 40955,
      }) as string,
      essentialEthContract.admin({
        gasLimit: 40955,
      }) as string,
    ]);

    expect(ethersAdmin).toBe(essentialEthAdmin);
  });

  it('should fetch "address" future_admin', async () => {
    const [ethersFutureAdmin, essentialEthFutureAdmin] = await Promise.all([
      ethersContract.future_admin({
        gasLimit: 40955,
      }) as string,
      essentialEthContract.future_admin({
        gasLimit: 40955,
      }) as string,
    ]);

    expect(ethersFutureAdmin).toBe(essentialEthFutureAdmin);
  });

  it('should fetch "bool" fund_admins_enabled', async () => {
    const [ethersFundAdminsEnabled, essentialEthFundAdminsEnabled] =
      await Promise.all([
        ethersContract.fund_admins_enabled({
          gasLimit: 40955,
        }) as boolean,
        essentialEthContract.fund_admins_enabled({
          gasLimit: 40955,
        }) as boolean,
      ]);
    expect(ethersFundAdminsEnabled).toBe(essentialEthFundAdminsEnabled);
  });

  it('should fetch "bool" fund_admins', async () => {
    const [ethersFundAdmins, essentialEthFundAdmins] = await Promise.all([
      ethersContract.fund_admins(address, {
        gasLimit: 40955,
      }) as boolean,
      essentialEthContract.fund_admins(address, {
        gasLimit: 40955,
      }) as boolean,
    ]);
    expect(ethersFundAdmins).toBe(essentialEthFundAdmins);
  });
});
