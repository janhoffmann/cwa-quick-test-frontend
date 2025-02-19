/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Version of the schema, according to Semantic versioning (ISO, https://semver.org/ version 2.0.0 or newer)
 */
export type SchemaVersion = string;
/**
 * The family or primary name(s) of the person addressed in the certificate
 */
export type FamilyName = string;
/**
 * The family name(s) of the person transliterated
 */
export type StandardisedFamilyName = string;
/**
 * The given name(s) of the person addressed in the certificate
 */
export type GivenName = string;
/**
 * The given name(s) of the person transliterated
 */
export type StandardisedGivenName = string;
/**
 * Date of Birth of the person addressed in the DGC. ISO 8601 date format restricted to range 1900-2099
 */
export type DateOfBirth = string;
/**
 * EU eHealthNetwork: Value Sets for Digital Green Certificates. version 1.0, 2021-04-16, section 2.1
 */
export type DiseaseAgentTargeted = string;

/**
 * EU Digital Green Certificate
 */
export interface EUDGC {
  ver: SchemaVersion;
  /**
   * Surname(s), given name(s) - in that order
   */
  nam: {
    fn?: FamilyName;
    fnt: StandardisedFamilyName;
    gn?: GivenName;
    gnt?: StandardisedGivenName;
    [k: string]: unknown;
  };
  dob: DateOfBirth;
  /**
   * Vaccination Group
   */
  v?: [VaccinationEntry, ...VaccinationEntry[]];
  /**
   * Test Group
   */
  t?: [TestEntry, ...TestEntry[]];
  /**
   * Recovery Group
   */
  r?: [RecoveryEntry, ...RecoveryEntry[]];
  [k: string]: unknown;
}
/**
 * Vaccination Entry
 */
export interface VaccinationEntry {
  /**
   * disease or agent targeted
   */
  tg: string;
  /**
   * vaccine or prophylaxis
   */
  vp: string;
  /**
   * vaccine medicinal product
   */
  mp: string;
  /**
   * Marketing Authorization Holder - if no MAH present, then manufacturer
   */
  ma: string;
  /**
   * Dose Number
   */
  dn: number;
  /**
   * Total Series of Doses
   */
  sd: number;
  /**
   * Date of Vaccination
   */
  dt: string;
  /**
   * Country of Vaccination
   */
  co: string;
  /**
   * Certificate Issuer
   */
  is: string;
  /**
   * Unique Certificate Identifier: UVCI
   */
  ci: string;
  [k: string]: unknown;
}
/**
 * Test Entry
 */
export interface TestEntry {
  tg: DiseaseAgentTargeted;
  /**
   * Type of Test
   */
  tt: string;
  /**
   * NAA Test Name
   */
  nm?: string;
  /**
   * RAT Test name and manufacturer
   */
  ma?: string;
  /**
   * Date/Time of Sample Collection
   */
  sc: string;
  /**
   * Date/Time of Test Result
   */
  dr?: string;
  /**
   * Test Result
   */
  tr: string;
  /**
   * Testing Centre
   */
  tc: string;
  /**
   * Country of Test
   */
  co: string;
  /**
   * Certificate Issuer
   */
  is: string;
  /**
   * Unique Certificate Identifier, UVCI
   */
  ci: string;
  [k: string]: unknown;
}
/**
 * Recovery Entry
 */
export interface RecoveryEntry {
  tg: DiseaseAgentTargeted;
  /**
   * ISO 8601 Date of First Positive Test Result
   */
  fr: string;
  /**
   * Country of Test
   */
  co: string;
  /**
   * Certificate Issuer
   */
  is: string;
  /**
   * ISO 8601 Date: Certificate Valid From
   */
  df: string;
  /**
   * Certificate Valid Until
   */
  du: string;
  /**
   * Unique Certificate Identifier, UVCI
   */
  ci: string;
  [k: string]: unknown;
}
