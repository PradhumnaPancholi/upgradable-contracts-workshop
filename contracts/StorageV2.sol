// SPDX-License-Identifier: GPL-3.0//
pragma solidity ^0.8.0;

/// @author Pradhumna Pancholi ///
/// @title Storage ///
contract StorageV2{
    uint private value;

    /// @notice emitted when "value" is modified ///
    event ValueChanged(uint newValue);

    function setValue(uint _newValue) public {
        value = _newValue;
        emit ValueChanged(_newValue);
    }

    function getValue() public view returns (uint) {
        return value;
    }

    function name() public pure returns (string memory) {
        return 'Storage v2';
    }
}