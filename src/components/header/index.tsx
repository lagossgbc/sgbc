"use client";

import BlueLogo from "../../assets/logo-blue.svg";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "..";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DownCaret } from "@/assets";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { MobileMenuWrapper } from "./style";
import { useRouter } from "next/navigation";
import { removeHashAndFollowing } from "@/utils/helper";

const abousUsDropdownItems: MenuProps["items"] = [
  {
    label: (
      <Link href="/reformed-baptist" className="py-4 px-6 text-blue-400">
        Who are we and what we believe
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        href="/covenant-and-constitution"
        className="py-4 px-6 text-blue-400"
      >
        Church Covenant and Constitution
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link href="/membership" className="py-4 px-6 text-blue-400">
        Membership Request
      </Link>
    ),
    key: "2",
  },
];

const ministriesDropdownItems: MenuProps["items"] = [
  {
    label: (
      <Link href="/ministries" className="py-4 px-6 text-blue-400">
        SGBC Ministries
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        href="/ministries/bible-study-groups"
        className="py-4 px-6 text-blue-400"
      >
        Bible Study Centres & Prayer Clusters
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link
        href="/ministries/affiliated-ministries"
        className="py-4 px-6 text-blue-400"
      >
        Affiliated Ministries
      </Link>
    ),
    key: "2",
  },
];

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("About", "about", null, [
    { type: "divider" },
    getItem("Who we are & What we Believe", "our-history-and-mission", null, [
      getItem("Reformed Baptist", "our-history-and-mission#reformed-baptist"),
      getItem("Our History & Mission", "our-history-and-mission#"),
      getItem("Our Leadership", "our-history-and-mission#our-leadership"),
      getItem("The Gospel", "our-history-and-mission#the-gospel"),
    ]),
    getItem(
      "Church Covenant and Constitution",
      "our-history-and-mission#covenant-constitution",
      null
    ),
    { type: "divider" },
  ]),

  getItem("Ministries", "ministries", null, [
    { type: "divider" },
    getItem("SGBC Ministries", "ministries#"),
    // getItem('Bible Study Centers & Prayer Cluster', '2'),
    // getItem('Affiliated Ministries', '3'),
    { type: "divider" },
  ]),

  getItem("Events", "events"),

  // getItem('Resources', 'sub4', null, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),

  getItem("Contact", "contact"),

  getItem("Give", "give"),
];

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    const key = e.key;
    const route = removeHashAndFollowing(key);
    router.push(route);
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="overflow-hidden">
      <nav className="bg-[#ffffff] w-full flex items-center py-3">
        <div className="w-11/12 h-[42px] mx-auto flex flex-row justify-between items-center">
          <Link href="/">
            <Image src={BlueLogo} height={50} width={50} alt="SGBC Logo" />
          </Link>
          <ul className="hidden md:flex gap-20 text-blue-400 z-50">
            <li className="relative">
              <Dropdown
                menu={{ items: abousUsDropdownItems }}
                trigger={["click"]}
                overlayClassName="dropdown-items"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="cursor-pointer">
                    About Us
                    <Image src={DownCaret} height={24} width={24} alt="" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className="relative">
              <Dropdown
                menu={{ items: ministriesDropdownItems }}
                trigger={["click"]}
                overlayClassName="dropdown-items"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="cursor-pointer">
                    Ministries
                    <Image src={DownCaret} height={24} width={24} alt="" />
                  </Space>
                </a>
              </Dropdown>
            </li>
            {/* <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li> */}
            <li className="text-blue-400">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-blue-400">
              <Link href="/give">Give</Link>
            </li>
          </ul>
          <div className="block md:hidden" onClick={toggleMenu}>
            <MenuOutlined
              style={{ color: "#00397F" }}
              onClick={() => {
                console.log("MENU!");
              }}
            />
          </div>
        </div>
      </nav>
      {menuOpen && (
        <MobileMenuWrapper className="bg-[white] md:hidden h-[100vh] w-[100%] fixed top-0 overflow-hidden font-menu z-50">
          <Menu
            onClick={onClick}
            style={{ width: "100%" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
          <li
            className="bg-yellow-500 flex items-center py-[25px] justify-end gap-5 pr-5 font-[16px]"
            onClick={toggleMenu}
          >
            <span>Close</span>
            <CloseOutlined />
          </li>
          {/* 
          <li className="flex items-center py-2 justify-end gap-5 pr-5 font-[16px]">
            <span>About</span>
            <DownOutlined />
          </li>
          <li className="flex items-center py-2 justify-end gap-5 pr-5 font-[16px]">
            <span>Ministries</span>
            <DownOutlined />
          </li>
          <li className="flex py-2 justify-end pr-5 font-[16px]">
            <Link href="/events" className="flex items-center gap-5">
              <span>Events</span>
              <DownOutlined style={{ color: "rgb(0,0,0,0)" }} />
            </Link>
          </li>
          <li className="flex items-center py-2 justify-end gap-5 pr-5 font-[16px]">
            <span>Resources</span>
            <DownOutlined />
          </li>
          <li className="flex items-center py-2 justify-end gap-5 pr-5 font-[16px]">
            <span>Contact</span>
            <DownOutlined style={{ color: "rgb(0,0,0,0)" }} />
          </li>
          <li className="flex items-center py-2 justify-end gap-5 pr-5 font-[16px]">
            <Link href="/give" className="flex items-center justify-end gap-5">
              <span>Give</span>
              <DownOutlined style={{ color: "rgb(0,0,0,0)" }} />
            </Link>
          </li> */}
        </MobileMenuWrapper>
      )}
    </header>
  );
};

export default Header;
