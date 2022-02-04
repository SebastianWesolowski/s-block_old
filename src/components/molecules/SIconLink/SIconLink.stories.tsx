import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SvgLogoSygnet } from "s-brand";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddIcon from "@mui/icons-material/Add";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { SIconLink } from "./SIconLink";
import README from "./README.md";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/SIconLink",
  component: SIconLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    readme: {
      sidebar: README,
    },
  },
  args: {
    path: "/",
    label: "Home",
    icon: <SvgLogoSygnet />,
  },
} as ComponentMeta<typeof SIconLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SIconLink> = (args) => (
  <SIconLink {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  position: "right",
  icon: <AccessAlarmIcon sx={{ fontSize: 14 }} />,
};

export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
  position: "left",
  icon: <AddIcon sx={{ fontSize: 14 }} />,
};

export const EmptyLabel = Template.bind({});
EmptyLabel.args = {
  label: undefined,
  icon: <AddIcon sx={{ fontSize: 14 }} />,
};

export const ManyItems: ComponentStory<typeof SIconLink> = (args) => (
  <>
    <div style={{ display: "flex" }}>
      <SIconLink {...args} icon={<AccessAlarmIcon sx={{ fontSize: 14 }} />} />
      <SIconLink {...args} icon={<AddIcon sx={{ fontSize: 14 }} />} />
      <SIconLink {...args} label="" />
      <SIconLink {...args} label="" />
      <SIconLink {...args} />
      <SIconLink {...args} />
      <SIconLink {...args} />
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SIconLink {...args} icon={<AccessAlarmIcon sx={{ fontSize: 14 }} />} />
      <SIconLink {...args} icon={<AddIcon sx={{ fontSize: 14 }} />} />
      <SIconLink {...args} label="" />
      <SIconLink {...args} label="" />
      <SIconLink {...args} />
      <SIconLink {...args} />
    </div>
  </>
);

export const OnlyIcons: ComponentStory<typeof SIconLink> = () => (
  <>
    <div style={{ display: "flex" }}>
      <SIconLink
        path="https://YourFacebookLink/"
        icon={<Facebook fontSize="large" />}
      />
      <SIconLink
        path="https://YourFacebookLink/"
        icon={<Instagram fontSize="large" />}
      />
      <SIconLink
        path="https://YourFacebookLink/"
        icon={<YouTube fontSize="large" />}
      />
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SIconLink
        path="https://YourFacebookLink/"
        icon={<Facebook fontSize="large" />}
      />
      <SIconLink
        path="https://YourFacebookLink/"
        icon={<Instagram fontSize="large" />}
      />
      <SIconLink
        path="https://YourFacebookLink/"
        icon={<YouTube fontSize="large" />}
      />
    </div>
  </>
);
